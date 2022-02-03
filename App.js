import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import logo from './assets/logo_white.png';
import Buttons from './Buttons'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food-Formula</Text>
      <Image style={styles.logo} source={logo} alt={"Logo"}/>
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
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
  }
});
