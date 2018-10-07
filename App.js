import React from 'react';
import Home from './src/pages/Home'
import Rules from './src/pages/Rules'
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import reducer from './src/store/reducer'
import { Provider } from 'react-redux'
import Game from './src/pages/Game';

const store = createStore(reducer); 

const AppNavigator = createStackNavigator({
  HomeScreen: {screen: Home},
  RulesScreen: {screen: Rules},
  GameScreen: {screen: Game},
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
