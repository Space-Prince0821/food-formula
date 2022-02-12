import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Buttons from '../components/Buttons';
import logo from '../assets/logo_white.png';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { StatusBar } from 'expo-status-bar';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food-Formula</Text>
            <Image style={styles.logo} source={logo} alt={"Logo"}/>
            <Buttons />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      height: '100%',
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

export default Welcome;