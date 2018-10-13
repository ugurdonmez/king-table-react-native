import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../icon/Icon'

class Name extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.nameText}>ugur</Text>

                <View style={styles.iconContainer}>
                    <Icon style={styles.icon} name="TriangleEmpty" height="15" width="15"/>
                    <Icon style={styles.icon} name="TriangleEmpty" height="15" width="15"/>
                </View>

                <View style={styles.iconContainer}>
                    <Icon style={styles.icon} name="CircleEmpty" height="15" width="15"/>
                    <Icon style={styles.icon} name="CircleEmpty" height="15" width="15"/>
                    <Icon style={styles.icon} name="CircleEmpty" height="15" width="15"/>
                </View>
            </View>
        )
    }
}

export default Name

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