import * as React from 'react';
import { NavigationContainer, Text, Image } from '@react-navigation/native';
import logo from './assets/logo_white.png';
//Components
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backroundColor: '#ffafcc',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    marginTop: 40,
    width: 250,
    height: 250
  },
});