import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const handScore = (props) => {
    return (
        <Text style={styles.container}>
            {props.score}
        </Text>
    );
};

handScore.propTypes = {
    score: PropTypes.number,
}

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
