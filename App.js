import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import LoginScreen from './screens/LoginScreen';
import Recipe from './screens/Recipe';
import History from './screens/History';
import Pizza from './screens/Pizza';


import {StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoButton from './screens/InfoButton';
import DrawerNavigator  from "./navigation/DrawerNavigator";


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/logo_white.png')}
    />
  );
}

function App() {
    return(
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    )
}
export default App;