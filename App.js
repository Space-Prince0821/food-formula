import * as React from 'react';
import { NavigationContainer, Text, Image } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import logo from './assets/logo_white.png';

import Login from './components/login';
import Register from './components/register';
import Buttons from './components/Buttons';


export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Buttons />
      <Text style={styles.title}>Food Formula</Text>
    <Image styles={styles.logo} source={logo} alt={"Logo"}></Image>
      
    </NavigationContainer>
  );
}