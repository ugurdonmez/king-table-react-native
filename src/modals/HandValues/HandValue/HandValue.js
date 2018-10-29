import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class HandValue extends Component {

    static propTypes = {
        name: PropTypes.string,
        canIncrease: PropTypes.bool,
        canDecrease: PropTypes.bool,
    }

    state = {
        value : 0,
    }

    valueIncreaseHandle = () => {
        let val = this.state.value;
        val = val + 1;

        this.setState({
            ...this.state,
            value: val,
        })
    }

    valueDecreaseHandle = () => {
        let val = this.state.value;
        val = val - 1;

        this.setState({
            ...this.state,
            value: val,
        })
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
                    onPress={this.valueDecreaseHandle}
                    color={colorMinus}
                    style={styles.buttonMinus} 
                    title="-"></Button>
                
                <Button 
                    disabled
                    style={styles.buttonValue} 
                    title={String(this.state.value)}></Button>
                
                <Button 
                    onPress={this.valueIncreaseHandle}
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