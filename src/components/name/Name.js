import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../icon/Icon'
import PropTypes from 'prop-types';

class Name extends Component {

    static propTypes = {
        name: PropTypes.string,
        reward: PropTypes.number,
        punish: PropTypes.number,
    }

    render() {
        let rewards = []

        let index = 0;
        for (; index < this.props.reward; i++) {
            rewards.push(<Icon style={styles.icon} name="Triangle" height="15" width="15" />)
        }
        for (; index < 1; i++) {
            rewards.push(<Icon style={styles.icon} name="TriangleEmpty" height="15" width="15" />)
        }

        let punishes = []
        index = 0;
        for (; index < this.props.reward; i++) {
            punishes.push(<Icon style={styles.icon} name="Circle" height="15" width="15" />)
        }
        for (; index < 1; i++) {
            punishes.push(<Icon style={styles.icon} name="CircleEmpty" height="15" width="15" />)
        }

        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>{this.props.name}</Text>

                <View style={styles.iconContainer}>
                    {rewards}
                </View>

                <View style={styles.iconContainer}>
                    {punishes}
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '20%',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderStyle: 'solid',
    },
    icon: {
        margin: 3,
    },
    nameText: {
        textAlign: 'center',
    }
})

export default Name
