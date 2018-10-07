import React, { Component } from 'react'
import { View, Text } from 'react-native';

class Rules extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: 'white',
        },
    });

    render() {
        return (
            <View>
                <Text>Kurallar</Text>
            </View>
        )
    }
}

export default Rules