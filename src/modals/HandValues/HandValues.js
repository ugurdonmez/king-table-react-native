import React, { Component } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import HandValue from './HandValue/HandValue';
import handValueMap from './../../constants/handValueMap'

class HandValues extends Component {

    static propTypes = {
        visible: PropTypes.bool,
        modalClose: PropTypes.func,
    }

    state = {
        handRow: 1,
        handId: 0,
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

    // handValueNameMap = [
    //     {
    //         name: 'Koz',
    //         total: 13,
    //         value: 50,
    //     },
    //     {
    //         name: 'El Almaz',
    //         total: 13,
    //         value: -50,
    //     },
    //     {
    //         name: 'Erkek Almaz',
    //         total: 8,
    //         value: -60,
    //     },
    //     {
    //         name: 'Kiz Almaz',
    //         total: 4,
    //         value: -100,
    //     },
    //     {
    //         name: 'Kupa Almaz',
    //         total: 13,
    //         value: -30,
    //     },
    //     {
    //         name: 'Rifki',
    //         total: 1,
    //         value: -320,
    //     },
    //     {
    //         name: 'Son Iki',
    //         total: 2,
    //         value: -180,
    //     },
    // ]

    radioButtonHandler = (id) => {
        this.setState({
            ...this.state,
            handId: id,
        });
    }

    increaseDecreaseDisabledHandler = () => {
        let max = handValueMap[this.state.handId].total;

        let current = this.state.playerScore.reduce((a, b) => a + b, 0)

        if (current >= max) {
            this.setState({
                ...this.state,
                canIncrease: [
                    false,
                    false,
                    false,
                    false,
                ]
            });

            return;
        }

        if (current === 0) {
            this.setState({
                ...this.state,
                canDecrease: [
                    false,
                    false,
                    false,
                    false,
                ]
            });

            return;
        }

        let playerScore = this.state.playerScore;

        let canDecrease = playerScore.map(p => p > 0 ? true : false)

        let canIncrease = playerScore.map(p => p === max ? false : true)
        
        this.setState({
            ...this.state,
            canDecrease,
            canIncrease,
        })
    }

    increaseHandler = (id) => {
        let playerScore = this.state.playerScore;

        playerScore[id]++;

        this.setState({
            ...this.state,
            playerScore
        })

        this.increaseDecreaseDisabledHandler();
    }

    decreaseHandler = (id) => {
        let playerScore = this.state.playerScore;

        playerScore[id]--;

        this.setState({
            ...this.state,
            playerScore,
        })

        this.increaseDecreaseDisabledHandler();
    }

    saveHandValueHandler = () => {
        // save to state

        let hand = {
            row: this.state.handRow,
            id: this.state.handId,
            scores: this.state.playerScore,
        }

        this.props.saveHandValue(hand)

        this.props.modalClose();
    }

    render() {

        let radio_props = handValueMap.map((p, index) => {
            return {
                label: p.name,
                value: index,
            }
        })

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
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => { this.radioButtonHandler(value) }}
                    />

                    <Text>Secilen Oyun: El Almaz</Text>

                    {handValues}
                </View>

                <Button
                    onPress={this.saveHandValueHandler}
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
        saveHandValue: (hand) => dispatch({
            type: 'ENTER_HAND_VALUE',
            payload: {
                hand,
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandValues);