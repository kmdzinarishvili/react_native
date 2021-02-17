import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex,
    };
    return (
        <View style={[styles.box, boxColor]}>
            <Text style={styles.text}>{colorName}: {colorHex}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
    },

    text: {
        color: 'white'
    },
    box: {
        color: 'white',
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10

    },
    bold: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18
    },
    cyan: {
        backgroundColor: '#2aa198',

    },
    blue: {
        backgroundColor: '#268bd2',
    },
    magenta: {
        backgroundColor: '#d33682',

    },
    orange: {
        backgroundColor: '#cb4b16',

    }

});
export default ColorBox;