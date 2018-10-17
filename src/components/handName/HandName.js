import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native'

const handName = (props) => {
    return (
        <Text style={styles.container}>
            {props.name}
        </Text>
    );
}

handName.propTypes = {
    name: PropTypes.string,
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
