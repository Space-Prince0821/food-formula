import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { palette } from '../assets/Colors.js';
import { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const spoonKey = "d39928a7b31048459f53673e3e5b3c91";

const userRecipeIDs = ['716429'];

const History = () => {

  const displayRecipe = (id) => {
    fetch (
      'https://api.spoonacular.com/recipes/' + id  + '/information?apiKey=' + spoonKey
    )
    .then((response) => response.json())
    .then((data) => {
      <Text>{data.title}</Text>;
      // setImageUrl(data.image);
    })
    .catch(() => {
      alert("Recipe not found!");
    })
  };

  const getRecipes = userRecipeIDs.map((i) => 
    <TouchableOpacity style={styles.recipeCard} key={i}>
      {/* <Text style={styles.recipe} key={i}>{i}</Text> */}
      {displayRecipe(i)}
    </TouchableOpacity>
  );

  return (
    <ScrollView backgroundColor={palette.blue}>
      <View style={styles.container}>
        <Text style={styles.title}>Scan History</Text>
        {getRecipes}
      </View>
    </ScrollView>
  )
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
    backgroundColor: "#fff",
    borderRadius: 50/3,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#a2d2ff"
  }
});

export default History;