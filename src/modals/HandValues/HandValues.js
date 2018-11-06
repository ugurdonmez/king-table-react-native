import React, { Component } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import HandValue from './HandValue/HandValue';
import handValueMap from './../../constants/handValueMap'

class HandValues extends Component {

    initialState = {
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

    constructor(props) {
        super(props);
    
        this.state = this.initialState;
    }

    componentWillMount = () => {
      console.log('aaaaaaaaaaaaaa')
    }
    

    static propTypes = {
        visible: PropTypes.bool,
        modalClose: PropTypes.func,
    }

    radioButtonHandler = (id) => {
        this.setState({
            ...this.state,
            handId: id,
            playerScore: [0,0,0,0],
            canIncrease: [true,true,true,true],
            canDecrease: [false,false,false,false],
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
        let hand = {
            id: this.state.handId,
            scores: this.state.playerScore,
        }

        let playerIndex = this.props.hands.length % 4;
        let handType = this.state.handId === 0 ? 0 : 1; 
        
        this.props.enterPlayerHand(playerIndex, handType);
        this.props.increasePlayedHand(this.state.handId);
        this.props.saveHandValue(hand);

        this.props.modalClose();
        this.setState(this.initialState);
    }

    getAvailableHands = () => {
        let playerIndex = this.props.hands.length % 4;
        
        let availableHands = []

        if (this.props.playersHands[playerIndex][0] < 2) {
            availableHands.push(handValueMap[0]);
        }

        if (this.props.playersHands[playerIndex][1] < 3) {
            for (let i = 1; i < 7; i++) {
                if (this.props.playedHands[i] < 2) {
                    availableHands.push(handValueMap[i]);
                }
            }
        }

        return availableHands;
    }

    render() {

        // let radio_props = handValueMap.map((p, index) => {
        //     return {
        //         label: p.name,
        //         value: index,
        //     }
        // })

        let radio_props = this.getAvailableHands().map((p, index) => {
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
                    <Text>{this.props.hands.length + 1}. El Oynaniyor</Text>
                    <Text>El Sirasi: {this.props.players[this.props.hands.length % 4]}</Text>

                    <RadioForm
                        radio_props={radio_props}
                        initial={this.state.handId}
                        onPress={(value) => { this.radioButtonHandler(value) }}
                    />

                    <Text>Secilen Oyun: {handValueMap[this.state.handId].name}</Text>

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
        players: state.players,
        hands: state.hands,
        playedHands: state.playedHands,
        playersHands: state.playersHands,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveHandValue: (hand) => dispatch({
            type: 'ENTER_HAND_VALUE',
            payload: {
                hand,
            },
        }),
        enterPlayerHand: (index, handType) => dispatch({
            type: 'ENTER_PLAYER_HAND',
            payload: {
                index,
                handType,
            },
        }),
        increasePlayedHand: (index) => dispatch({
            type: 'INCREASE_PLAYED_HAND',
            payload: {
                index,
            },
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandValues);