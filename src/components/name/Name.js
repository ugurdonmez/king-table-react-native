import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../icon/Icon'

class Name extends Component {

    pictureSource = require('../../../images/svg/001-triangle.svg')

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


{/* <Icon name="Tick" fill="#0f0" viewBox="0 0 200 200" />
                <Icon name="SortArrows" height="20" width="20" />
                <Icon name="Triangle" height="20" width="20" />
                <Icon name="TirangleEmpty" height="20" width="20" />
                <Icon name="Square" height="20" width="20" />
                <Icon name="SquareEmpty" height="20" width="20" /> */}