import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{fontWeight: 'bold', color: '#FFFFFF', fontSize: 35, marginBottom: 25}}>Welcome Back!</Text>
      <Image source={{ uri: 'https://www.mcicon.com/wp-content/uploads/2021/02/Technology_Camera_1-copy-8.jpg' }} style={styles.cameraSelect} />

      <TouchableOpacity
        style = {{borderRadius: 150/3, width: 305, height: 40, backgroundColor: '#c9c9c9', borderWidth: 2}}>
        <Text style = {{textAlign: 'center', fontSize: 30, color: '#FFFFFF'}}>Click to scan dish</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed8484',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraSelect: {
    width: 305,
    height: 200,
    marginBottom: 20,
    borderWidth: 4,
    overflow: "hidden",
    borderRadius: 150/3,
  },
});
