import React, { Component } from 'react'
import { Modal, View, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FormLabel, FormInput, Text } from 'react-native-elements'
import { connect } from 'react-redux'

class Home extends Component {

  state = {
    modalVisible: false,
    players: ['', '', '', '',]
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'King Skor Tablosu',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white',
    },
  });

  constructor(props, context) {
    super(props, context);
    this.forwardRules = this.forwardRules.bind(this);
  }

  forwardRules() {
    console.log('open rules pages')
    this.props.navigation.navigate('RulesScreen', { title: 'Oyun Kurallari' })
  }

  updatePlayerName(index, name) {
    const players = { ...this.state.players }
    players[index] = name

    this.setState({
      ...this.state,
      players
    })
  }

  modalClose = () => {
    this.setModalVisible(!this.state.modalVisible);
    this.props.navigation.navigate('GameScreen', { title: 'Yeni Oyun' })
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
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

        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.button}
          title='Yeni Oyun' />
        <Button
          style={styles.button}
          title='Eski Oyunlar' />
        <Button
          onPress={this.forwardRules}
          style={styles.button}
          title='Oyun Kurallari' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  }
})

const modalStyles = StyleSheet.create({
  title: {

  }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)