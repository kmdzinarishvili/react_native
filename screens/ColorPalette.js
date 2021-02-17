import React from 'react';
import { View, StyleSheet, StatusBar, FlatList, Text } from 'react-native';
import ColorBox from '../components/ColorBox';



const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (
        <View style={[styles.container, styles.view]}>
            <FlatList
                data={colors}
                keyExtractor={(item) => item.hexCode} // don't need if your item has a key
                renderItem={({ item }) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    view: {
        marginTop: StatusBar.currentHeight,

        paddingTop: 50,
        paddingHorizontal: 10
    },
    text: {
        color: 'white'
    },

    bold: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18
    },

});


export default ColorPalette;