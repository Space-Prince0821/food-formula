import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Scan extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {{fontWeight: 'bold', color: '#FFFFFF', fontSize: 40, marginBottom: 60, marginTop: 0, textAlign: 'center'}}>Welcome to Food Formula!</Text>
        <Image source={{ uri: 'https://www.mcicon.com/wp-content/uploads/2021/02/Technology_Camera_1-copy-8.jpg' }} style={styles.cameraSelect} />
        <View style={{marginTop: 40}}>
          <TouchableOpacity
            style = {styles.touchContainer}>
            <Text style = {styles.buttonText}>Click to scan dish!</Text>
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
  cameraSelect: {
    width: 305,
    height: 350,
    marginBottom: 20,
    borderWidth: 4,
    overflow: "hidden",
    borderRadius: 150/3,
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
