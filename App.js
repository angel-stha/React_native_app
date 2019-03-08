/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import { createStackNavigator, createAppContainer} from 'react-navigation';
//import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Main from './src/Main';
//import BuyScreen from './src/Buy';
//import SignScreen from './src/Signup';
//import SellScreen from './src/Sells';
//import LoginScreen from './src/Login';
//const instructions = Platform.select({
  //ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  //android:
    /*'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component{
  render() {
    return (
      <View>
        <Main/>
      </View>
    );
  }
}

//const AppStack = createStackNavigator({
  //Home: App,
  //LoginScreen : LoginScreen,
  //Sign : SignScreen,
 //Buy:BuyScreen,
  //Sel:SellScreen

//});

//export default createAppContainer(AppStack);


