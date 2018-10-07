import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const handName = () => {
    return (
        <Text style={styles.container}>
            El Almaz
        </Text>
    );
}

export default handName;

var styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '20%',
    },
})
