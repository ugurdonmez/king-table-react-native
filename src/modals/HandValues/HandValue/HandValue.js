import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class HandValue extends Component {

    static propTypes = {
        name: PropTypes.string,
        canDecrease: PropTypes.bool,
        canIncrease: PropTypes.bool,
        value: PropTypes.number,
        decreaseHandler: PropTypes.func,
        increaseHandler: PropTypes.func,
    }

    render() {
        let colorBlue = "#3463c1";
        let colorBrown = "#aa6c36";

        let colorPlus = this.props.canIncrease ? colorBlue : colorBrown;
        let colorMinus = this.props.canDecrease ? colorBlue : colorBrown;

        return (
            <View style={styles.view}>
                <Text style={styles.text}>{this.props.name}: </Text>

                <Button
                    disabled={!this.props.canDecrease}
                    onPress={this.props.decreaseHandler}
                    color={colorMinus}
                    style={styles.buttonMinus}
                    title="-"></Button>

                <Button
                    disabled
                    style={styles.buttonValue}
                    title={String(this.props.value)}></Button>

                <Button
                    disabled={!this.props.canIncrease}
                    onPress={this.props.increaseHandler}
                    color={colorPlus}
                    style={styles.buttonPlus}
                    title="+"></Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
    },
    text: {
        width: '30%',
        marginTop: 10,
    },
    buttonPlus: {
        width: '20%',
    },
    buttonValue: {
        width: '20%',
    },
    buttonMinus: {
        width: '20%',
    },
})

export default HandValue;