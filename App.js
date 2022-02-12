import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Welcome from './screens/Welcome';
import react from 'react';

export default function App() {
  return (
    <View>
      <Welcome />
    </View>
  );
};