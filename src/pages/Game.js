import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native';
import Name from '../components/name/Name';
import HandNane from '../components/handName/HandName';
import HandScore from '../components/handScore/HandScore';
import { connect } from 'react-redux';
import HandValues from '../modals/HandValues/HandValues';

class Game extends Component {
    state = {
        handValuesModalVisible: false,
    }

    constructor(props) {
        super(props);
        // this.handValuesModalOpen = this.handValuesModalOpen.bind(this);
    }

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
                onPress={navigation.getParam('openHandValues')}
            />
        ),
    });

    componentDidMount() {
        this.props.navigation.setParams({ openHandValues: this.handValuesModalOpen });
    }

    handValuesModalOpen = () => {
        this.setState({
            handValuesModalVisible: true,
        })
    }

    handValuesModalClose = () => {
        this.setState({
            handValuesModalVisible: false,
        })
    }

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
                <HandValues
                    visible={this.state.handValuesModalVisible}
                    modalClose={this.handValuesModalClose}
                />

                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{ width: '20%' }} />
                    <Name
                        name={this.props.players[0]}
                        reward={0}
                        punish={0} />
                    <Name
                        name={this.props.players[1]}
                        reward={0}
                        punish={0} />
                    <Name
                        name={this.props.players[2]}
                        reward={0}
                        punish={0} />
                    <Name
                        name={this.props.players[3]}
                        reward={0}
                        punish={0} />
                </View>

                {rows}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    addButtonTitle: {
        fontSize: 16,
    }
})

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(Game)
