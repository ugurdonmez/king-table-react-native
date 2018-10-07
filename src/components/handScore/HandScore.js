import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const handScore = () => {
    return (
        <Text style={styles.container}>
            100
        </Text>
    );
};

export default handScore;

var styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '20%',
    },
})
