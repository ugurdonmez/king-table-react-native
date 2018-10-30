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

    increaseHandler = () => {
        console.log('increase handler pressed');
    }

    decreaseHandler = () => {
        console.log('decrease handler pressed');
    }

    render() {
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

                    <HandValue 
                        name={this.props.players[0]}
                        canDecrease={this.state.canDecrease[0]}
                        canIncrease={this.state.canIncrease[0]}
                        value={this.state.playerScore[0]}
                        decreaseHandler={this.decreaseHandler}
                        increaseHandler={this.increaseHandler}
                    />

                    <HandValue 
                        name={this.props.players[1]}
                        canDecrease={this.state.canDecrease[1]}
                        canIncrease={this.state.canIncrease[1]}
                        value={this.state.playerScore[1]}
                        decreaseHandler={this.decreaseHandler}
                        increaseHandler={this.increaseHandler}
                    />

                    <HandValue 
                        name={this.props.players[2]}
                        canDecrease={this.state.canDecrease[2]}
                        canIncrease={this.state.canIncrease[2]}
                        value={this.state.playerScore[2]}
                        decreaseHandler={this.decreaseHandler}
                        increaseHandler={this.increaseHandler}
                    />

                    <HandValue 
                        name={this.props.players[3]}
                        canDecrease={this.state.canDecrease[3]}
                        canIncrease={this.state.canIncrease[3]}
                        value={this.state.playerScore[3]}
                        decreaseHandler={this.decreaseHandler}
                        increaseHandler={this.increaseHandler}
                    />

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