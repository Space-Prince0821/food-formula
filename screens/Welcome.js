import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import logo from '../assets/logo_white.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { palette } from '../assets/Colors1.js';

const Welcome = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Home');
  };

  const onLoginHandler = () => {
    navigation.navigate('LoginScreen');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Food-Formula</Text>
      </View>
      <Image style={styles.logo} source={logo} alt={"Logo"}/>
      <View style={styles.buttons}>
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
    backgroundColor: palette.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '12%',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    color: palette.secondary,
    fontWeight: 'bold'
  },
  logo: {
    marginTop: 60,
    width: 250,
    height: 250
  },
  buttons: {
    marginTop: 30
  },
  buttonContainer: {
    padding: 15,
    margin: 20,
    width: 300,
    alignItems: 'center',
    backgroundColor: palette.secondary,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: palette.textColor
  }
});

export default Welcome;