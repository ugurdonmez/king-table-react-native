import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Name from '../components/name/Name';
import HandNane from '../components/handName/HandName';
import HandScore from '../components/handScore/HandScore';

class Game extends Component {

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
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{ width: '20%' }} />
                    <Name />
                    <Name />
                    <Name />
                    <Name />
                </View>

                <View style={{
                    flexDirection: 'row',
                }}>
                    <HandNane />
                    <HandScore />
                    <HandScore />
                    <HandScore />
                    <HandScore />
                </View>
            </View>
        )
    }
}

export default Game