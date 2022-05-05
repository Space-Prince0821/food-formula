import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { palette } from '../assets/Colors.js';
import { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { WhiteBalance } from 'expo-camera/build/Camera.types';

const spoonKey = "d39928a7b31048459f53673e3e5b3c91";

const userRecipeIds = ['716429'];
// const userRecipeIds = [];

const History = () => {

  const navigation = useNavigation();

  let recipeArr = new Array;

  const initRecipes = (userRecipeIds) => {
    let arr = new Array;
    let fetches = [];
    for (var i = 0; i < userRecipeIds.length; i++) {
      var id = userRecipeIds[i];
      fetches.push(
        fetch (
          'https://api.spoonacular.com/recipes/' + id  + '/information?apiKey=' + spoonKey
        )
        .then((response) => response.json())
        .then((data) => {
          arr.push({title: data.title, image: data.image, id: id});
        })
        .catch(() => {
          alert("Recipe not found!");
        })
      );
    };
    Promise.all(fetches).then(function() {
      recipeArr = arr;
    })
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    initRecipes(userRecipeIds);

    const setData = () => {
      if (recipeArr.length !== 0) {
        setRecipes(recipeArr);
      }
    };
    const timer = setTimeout(() => {
      setData();
    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  const getRecipes = recipes.map((i) => 
    <TouchableOpacity 
        style={styles.recipeCard} 
        key={i.id}
        onPress={() => {
          navigation.navigate('RecipeScreen', {
            recipeId: i.id,
            fromHistory: true
          })
        }}
    >
      <Text style={styles.cardText}>{i.title}</Text>
      <Image style={styles.image} source={{uri: i.image}} alt={"Recipe: "}/>
    </TouchableOpacity>
  );

  return (
    <ScrollView backgroundColor={palette.orange}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Scan History</Text>
        </View>
        {userRecipeIds.length !== 0 ? getRecipes : <Text style={styles.noRecipeText}>No recipes scanned.</Text>}
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: palette.orange,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 4
  },  
  title: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: palette.blue,
    width: '100%',
    textAlign: 'center',
    padding: 20
  },
  recipeCard: {
    backgroundColor: palette.blue,
    padding: 30,
    margin: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  cardText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  image: {
    marginTop: 30,
    marginBottom: 0,
    width: 300,
    height: 200,
    borderRadius: 10
  },
  noRecipeText: {
    marginTop: 200,
    color: 'white',
    fontSize: 30,
    padding: 15
  }
});

export default History;