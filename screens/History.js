import React from 'react';
import { StatusBar } from 'expo-status-bar';
import BLTPic from "../assets/blt_Sandwich.png";
import PizzaPic from "../assets/pizzapic.jpeg";
import SalsaPic from "../assets/salsaVerde.jpeg";

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';


const History = ({ navigation }) => {
        return (

      <ScrollView  backgroundColor='#005778'>
        <View style={styles.container}>
          <Text style={styles.title}>Scan History</Text>
          <View>
            {/* pizza */}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pizza Page")}>
              <Text style={styles.buttonText}>Pizza</Text>
              <Image style={styles.foodPic} source={PizzaPic} alt={"pizza picture"}/>
            </TouchableOpacity>
            
            {/* BLT */}
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>BLT</Text>
              <Image style={styles.foodPic} source={BLTPic} alt={"blt picture"}/>
            </TouchableOpacity>

            {/* Salsa */}
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Salsa</Text>
              <Image style={styles.foodPic} source={SalsaPic} alt={"salsa picture"}/>
            </TouchableOpacity>
          </View>
      <StatusBar style="auto" />          
        </View>
      </ScrollView>
        );
    }

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#005778',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 13,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold'
  },
  foodPic: {
    marginTop: 10,
    marginBottom: 0,
    width: 340,
    height: 200,
    borderRadius: 50/3,
  },
  buttonContainer: {
    paddingTop: 10,
    marginBottom: 0,
    marginTop: 10,
    width: 340,
    alignItems: 'center',
    backgroundColor: "#FC4C02",
    borderRadius: 50/3,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff"
  }
});

export default History;