import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';


const PalettePreview = ({ handlePress, colorPalette }) => {
    return (
        <TouchableOpacity onPress={
            handlePress
        }>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                horizontal={true}

                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <View style={[{ backgroundColor: item.hexCode }, styles.box]}>
                </View>} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        height: 30,
        width: 30,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    }
});

export default PalettePreview;