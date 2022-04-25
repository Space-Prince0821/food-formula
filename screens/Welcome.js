import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import logo from '../assets/logo_white.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { palette } from '../assets/Colors.js';

const Welcome = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Home');
  };

  const onLoginHandler = () => {
    navigation.navigate('LoginScreen');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food-Formula</Text>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} alt={"Logo"}/>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onLoginHandler}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPressHandler}>
          <Text style={styles.buttonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: palette.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: palette.orange,
    fontWeight: 'bold'
  },
  logoContainer: {
    shadowColor: palette.orange,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10
  },  
  logo: {
    marginTop: 40,
    width: 250,
    height: 250
  },
  container2: {
    marginTop: 50
  },
  buttonContainer: {
    padding: 15,
    margin: 20,
    width: 300,
    alignItems: 'center',
    backgroundColor: palette.orange,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "white"
  }
});

export default Welcome;