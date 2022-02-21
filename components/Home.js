import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import logo from '../assets/logo_white.png';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Food-Formula</Text>
        <Image style={styles.logo} source={logo} alt={"Logo"}/>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.touchContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchContainer}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchContainer} onPress={() => this.props.pageChange(2)}>
                <Text style={styles.buttonText}>Continue as Guest</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffafcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold'
  },
  logo: {
    marginTop: 40,
    width: 250,
    height: 250
  },
  buttonsContainer: {
    marginTop: 50
  },
  touchContainer: {
      padding: 15,
      margin: 20,
      width: 300,
      alignItems: 'center',
      backgroundColor: "#fff",
      borderRadius: 150/3
  },
  buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: "#a2d2ff"
  }
});
