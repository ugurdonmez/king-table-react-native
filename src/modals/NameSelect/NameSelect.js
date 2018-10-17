import React, { Component } from 'react';
import { View, Button, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, Text } from 'react-native-elements';
import { connect } from 'react-redux';

class NameSelect extends Component {
    state = {
        visible: this.props.visible,
    }

    static propTypes = {
        visible: PropTypes.boolean,
    }

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 100 }}>
                    <View>
                        <Text h4 style={{
                            textAlign: 'center',
                            color: 'grey'
                        }}>Oyuncu isimlerini giriniz</Text>

                        <FormLabel>Oyuncu 1:</FormLabel>
                        <FormInput
                            onChangeText={(text) => this.props.onPlayerNameChanged(0, text)}
                            value={this.props.players[0]} />

                        <FormLabel>Oyuncu 2:</FormLabel>
                        <FormInput
                            onChangeText={(text) => this.props.onPlayerNameChanged(1, text)}
                            value={this.props.players[1]} />

                        <FormLabel>Oyuncu 3:</FormLabel>
                        <FormInput
                            onChangeText={(text) => this.props.onPlayerNameChanged(2, text)}
                            value={this.props.players[2]} />

                        <FormLabel>Oyuncu 4:</FormLabel>
                        <FormInput
                            onChangeText={(text) => this.props.onPlayerNameChanged(3, text)}
                            value={this.props.players[3]} />

                        <Button
                            onPress={() => (this.modalClose())}
                            title='Kaydet' />

                    </View>
                </View>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayerNameChanged: (index, name) => dispatch({
            type: 'PLAYER_NAME_UPDATE',
            payload: {
                index,
                name,
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameSelect);