import React, { Component } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import CheckBox from 'react-native-check-box'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import HandValue from './HandValue/HandValue';

class HandValues extends Component {

    static propTypes = {
        visible: PropTypes.bool,
        modalClose: PropTypes.func,
    }

    state = {
        handRow: 1,
        handName: 'Koz',
        handId: 1,
        playerScore: [
            0,
            0,
            0,
            0,
        ],
        canIncrease: [
            true,
            true,
            true,
            true,
        ],
        canDecrease: [
            false,
            false,
            false,
            false,
        ]
    }

    handValueNameMap = {
        0: 'Koz',
        1: 'El Almaz',
        2: 'Erkek Almaz',
        3: 'Kiz Almaz',
        4: 'Kupa Almaz',
        5: 'Rifki',
        6: 'Son Iki',
    }

    radio_props = [
        { label: 'Koz', value: 0 },
        { label: 'El Almaz', value: 1 },
        { label: 'Erkek Almaz', value: 2 },
        { label: 'Kiz Almaz', value: 3 },
        { label: 'Kupa Almaz', value: 4 },
        { label: 'Rifki', value: 5 },
        { label: 'Son Iki', value: 6 },
    ];

    radioButtonHandler = (id) => {
        this.setState({
            ...this.state,
            handName: this.handValueNameMap[id],
            handId: id,
        });
    }

    increaseHandler = (id) => {
        console.log('increase handler pressed' + id);
    }

    decreaseHandler = (id) => {
        console.log('decrease handler pressed' + id);
    }

    render() {

        let handValues = this.props.players.map((p, index) =>
            <HandValue
                key={index}
                name={p}
                canDecrease={this.state.canDecrease[index]}
                canIncrease={this.state.canIncrease[index]}
                value={this.state.playerScore[index]}
                decreaseHandler={() => this.decreaseHandler(index)}
                increaseHandler={() => this.increaseHandler(index)}
            />

        )

        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>

                <View style={{ marginTop: 100 }}>
                    <Text>1. El Oynaniyor</Text>
                    <Text>El Sirasi: Ugur</Text>

                    <RadioForm
                        radio_props={this.radio_props}
                        initial={0}
                        onPress={(value) => { this.radioButtonHandler(value) }}
                    />

                    <Text>Secilen Oyun: El Almaz</Text>

                    {handValues}
                </View>

                <Button
                    onPress={this.props.modalClose}
                    title='Kaydet' />
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandValues);