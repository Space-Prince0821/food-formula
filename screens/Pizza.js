import React from 'react';
import { StatusBar } from 'expo-status-bar';
import PizzaPic from "../assets/pizzapic.jpeg";

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    header: 'Ingredients',
    content: '-pepperoni\n-cheese\n-tomato sauce\n-dough',
    // content: '-bacon\n-lettuce\n-tomato\n-bread',
  },
  {
    header: 'Steps',
    content: '1. add this\n2. do this\n3. do that\n4. do this again\n 5. bake it',
  },
];

export default class Pizza extends React.Component {
  
  state = {
    activeSections: [],
  };
//////////////////////////////////////////////////////////////
  _renderHeader = (section) => {
    return (
    <View style={styles.buttonsContainer}>
      <Text style={styles.buttonText}>{section.header}</Text> 
    </View>
    );
  };

  _renderContent = (section) => {
    return (
      <View style={styles.contentContainer}>
        {/* {section.image} */}
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

    render() {
        return (
      <ScrollView  backgroundColor='#005778'>
        <View style={styles.container}>
          <Text style={styles.title}>Pizza</Text>
          <Image style={styles.foodPic} source={PizzaPic} alt={"pizza picture"}/>
          <StatusBar style="auto" />
          
          <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          touchableComponent={TouchableOpacity}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          expandMultiple={true}
          />

        </View>
      </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#005778',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
    },
    title: {
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold'
    },
    buttonsContainer: {
      padding: 15,
      marginTop: 15,
      marginBottom: 0,
      width: 350,
      alignItems: 'center',
      backgroundColor: "#FC4C02",
      borderRadius: 150/3
    },    
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    contentContainer: { 
      padding: 10,
      marginTop: 0,
      backgroundColor: '#00000015',
      borderRadius: 75/3
    },
    contentText: {
      fontSize: 20,
      color: 'white',
      marginLeft: 20,
    },
    foodPic: {
      marginBottom: 0,
      width: 385,
      height: 300,
      borderRadius: 50/3,
    },
  });