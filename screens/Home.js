import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';


const Home = ({ navigation, route }) => {
    const newColorPalette = route.params ? route.params.newColorPalette : null;
    const [colorPalettes, setColorPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchColorPalettes = useCallback(async () => {
        const result = await fetch(
            'https://color-palette-api.kadikraman.now.sh/palettes'
        );
        if (result.ok) {
            const palettes = await result.json();
            setColorPalettes(palettes);

        } else {
            console.log("failed api grab");
        }
    },
        []);

    useEffect(() => {
        fetchColorPalettes();
    }, []);

    useEffect(() => {
        console.log(newColorPalette);
        if (newColorPalette) {
            setColorPalettes(curr => [newColorPalette, ...curr]);
        }
    }, [newColorPalette]);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColorPalettes();
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    }, []);

    return (

        <View>
            <FlatList
                style={styles.list}
                data={colorPalettes}
                keyExtractor={item => item.paletteName}
                renderItem={({ item }) => (
                    <PalettePreview colorPalette={item}
                        handlePress={() => {
                            navigation.navigate("ColorPalette", item);
                        }}
                    />)}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                ListHeaderComponent={
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('ColorPaletteModal') }}>
                        <Text>Launch Modal</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10
    }
});
export default Home;

