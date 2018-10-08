import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native';
import Name from '../components/name/Name';
import HandNane from '../components/handName/HandName';
import HandScore from '../components/handScore/HandScore';

class Game extends Component {

    static navigationOptions = ({ navigation }) => ({
        // title: `${navigation.state.params.title}`,
        headerTitle: 'Yeni Oyun',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: 'white',
        },
        headerRight: (
            <Button
                style={styles.addButtonTitle}
                title='+'
                onPress={() => console.log('pressed')}
            />
            
        ),
    });

    render() {

        let rows = []

        for (let i = 0; i < 20; i++) {
            rows.push(
            <View
                key={i}
                style={{
                flexDirection: 'row',
            }}>
                <HandNane />
                <HandScore />
                <HandScore />
                <HandScore />
                <HandScore />
            </View>)
        }

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

                {rows}
            </View>
        )
    }
}

export default Game

var styles = StyleSheet.create({
    addButtonTitle: {
        fontSize: 16,
    }
})