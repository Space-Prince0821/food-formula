import { TouchableOpacity, SafeAreaView, ScrollView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import recipeAnalysis from '../assets/placeholders/burgerAnalysis.json';
import recipeInfo from '../assets/placeholders/burgerInfo.json';
import { palette } from '../assets/Colors.js';

const apiKey = 'd39928a7b31048459f53673e3e5b3c91';
const imageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg';

export default function Recipe() {

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150");

  //stores and maps ingredients
  const [ingredients, setIngredients] = useState([]);
  const listIngredients = ingredients.map((i) => <Text style={styles.ingredients} key={i.original}>{i.original}</Text>);

  //stores and maps steps
  const [steps, setSteps] = useState([]);
  const listSteps = steps.map((i) => i.steps.map((j) => 
    <Text style={styles.stepNum} key={j.number}>{j.number + ") "}
      <Text style={styles.stepInfo} key={j.step}>{j.step}</Text>
    </Text>
  ));

  //stores similar recipes
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const listSimilarRecipes = similarRecipes.map((i) => 
    <TouchableOpacity style={styles.similarRecipesContainer} key={i.title}>
      <Text style={styles.similarRecipes} key={i.title}>{i.title}</Text>
    </TouchableOpacity>
  );

  const getFoodInfo = () => {
    fetch(
        'https://api.spoonacular.com/food/images/analyze?apiKey=' + apiKey + '&imageUrl=' + imageUrl
    )
    .then((response) => response.json())
    .then((data) => {
      const id = data.recipes[0].id;
      fetch (
        'https://api.spoonacular.com/recipes/' + id  + '/information?apiKey=' + apiKey
      )
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setImageUrl(data.image);
        setIngredients(data.extendedIngredients);
      })
      .catch(() => {
        //alert("recipe not found!");
        setTitle("Recipe")
      })
    })
    .catch(() => {
        // alert("spoonacular API limit reached!");
        setTitle(recipeInfo.title);
        setImageUrl(recipeInfo.image);
        setIngredients(recipeInfo.extendedIngredients);
    });
  }

  const getPlaceholderInfo = () => {
    setTitle(recipeInfo.title);
    setImageUrl(recipeInfo.image);
    setIngredients(recipeInfo.extendedIngredients);
    setSteps(recipeInfo.analyzedInstructions);
    setSimilarRecipes(recipeAnalysis.recipes);
  }

  //Called every when page first rendered and every time page is updated
  useEffect(() => {
    // getFoodInfo();
    getPlaceholderInfo();
  })

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.recipeImage} source={{uri: imageUrl}} alt={"Recipe Image"}/>
      </View>
      <View style={styles.content}>
        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
          <View style={{padding: 5}}>
            {listIngredients}
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Steps</Text>
          <View style={{padding: 5}}>
            {listSteps}
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Similar Recipes</Text>
          <View style={{padding: 5}}>
            {listSimilarRecipes}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: palette.pink
  },
  titleContainer: {
    backgroundColor: palette.darkPink,
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    padding: 20,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 30,
    color: palette.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10
  },
  imageContainer: {
    width: '90%',
    height: 250,
    alignItems: 'center',
    margin: 10
  },
  recipeImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: palette.purple
  },
  subtitle: {
    fontSize: 25,
    color: palette.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
    textDecorationLine: 'underline'
  },
  contentContainer: {
    backgroundColor: palette.darkPink,
    borderRadius: 10,
    margin: 10,
    padding: 20
  },
  content: {
    padding: 5
  },
  ingredients: {
    fontSize: 20,
    padding: 5,
    paddingVertical: 10,
    color: palette.white
  },
  stepNum: {
    fontSize: 22,
    padding: 5,
    paddingVertical: 10,
    color: palette.lightBlue,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  stepInfo:{
    fontSize: 20,
    color: palette.white,
    fontWeight: 'normal'
  },
  similarRecipesContainer: {
    backgroundColor: palette.pink,
    marginVertical: 10,
    borderRadius: 10
  },
  similarRecipes:{
    fontSize: 18,
    color: palette.white,
    fontWeight: 'normal',
    textAlign: 'center',
    margin: 5,
    padding: 10
  }
});