import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import NameSelect from '../modals/NameSelect/NameSelect';

class Home extends Component {
  state = {
    modalVisible: false,
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

  modalClose = () => {
    console.log('Modal Close pressed')
    console.log(this.state)
    this.setModalVisible(false);
    this.props.navigation.navigate('GameScreen', { title: 'Yeni Oyun' })
  }

  render() {
    return (
      <View>
        <NameSelect
          modalClose={this.modalClose}
          visible={this.state.modalVisible} />

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

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)