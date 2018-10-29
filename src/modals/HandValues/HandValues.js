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
        isChecked: false,
    }

    radio_props = [
        { label: 'Koz', value: 1 },
        { label: 'El Almaz', value: 1 },
        { label: 'Erkek Almaz', value: 0 },
        { label: 'Kiz Almaz', value: 0 },
        { label: 'Kupa Almaz', value: 0 },
        { label: 'Rifki', value: 0 },
        { label: 'Son Iki', value: 0 },
    ];

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
                        onPress={(value) => { this.setState({ value: value }) }}
                    />

                    <Text>Secilen Oyun: El Almaz</Text>

                    <HandValue 
                        name="ugur"
                        canDecrease={false}
                        canIncrease={true}
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

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandValues);