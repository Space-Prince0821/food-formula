import { TouchableOpacity, SafeAreaView, ScrollView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { palette } from '../assets/Colors.js';
// placeholder recipe 1 - burger
import recipeAnalysis from '../assets/placeholders/burgerAnalysis.json';
import recipeInfo from '../assets/placeholders/burgerInfo.json';
// placeholder recipe 2 - ribs
import ribsAnalysis from '../assets/placeholders/ribsAnalysis.json';
import ribsInfo from '../assets/placeholders/ribsInfo.json';
// placeholder recipe 3 - chili
import chiliAnalysis from '../assets/placeholders/chiliAnalysis.json';
import chiliInfo from '../assets/placeholders/chiliInfo.json';
// placeholder recipe 4 - fruit salad
import fruitSaladAnalysis from '../assets/placeholders/fruitSaladAnalysis.json';
import fruitSaladInfo from '../assets/placeholders/fruitSaladInfo.json';
import recipeInfoNoSteps from '../assets/placeholders/recipeInfoNoSteps.json'; //display no steps if recipe does not contain instructions

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
  const listSimilarRecipes = similarRecipes.slice(1).map((i) => 
    <TouchableOpacity style={styles.similarRecipesContainer} key={i.id}>
      <Text style={styles.similarRecipes} key={i.id}>{i.title}</Text>
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

  const currentRecipe = 0;

  const getPlaceholderInfo = () => {
    if (currentRecipe == 0) {
      setTitle(recipeInfo.title);
      setImageUrl(recipeInfo.image);
      setIngredients(recipeInfo.extendedIngredients);
      if (recipeInfo.analyzedInstructions != '') {
        setSteps(recipeInfo.analyzedInstructions);
      } else {
        setSteps(recipeInfoNoSteps.analyzedInstructions);
      }
      setSimilarRecipes(recipeAnalysis.recipes);
    } else if (currentRecipe == 1) {
      setTitle(ribsInfo.title);
      setImageUrl(ribsInfo.image);
      setIngredients(ribsInfo.extendedIngredients);
      if (ribsInfo.analyzedInstructions != '') {
        setSteps(ribsInfo.analyzedInstructions);
      } else {
        setSteps(recipeInfoNoSteps.analyzedInstructions);
      }
      setSimilarRecipes(ribsAnalysis.recipes);
    } else if (currentRecipe == 2) {
      setTitle(chiliInfo.title);
      setImageUrl(chiliInfo.image);
      setIngredients(chiliInfo.extendedIngredients);
      if (chiliInfo.analyzedInstructions != '') {
        setSteps(chiliInfo.analyzedInstructions);
      } else {
        setSteps(recipeInfoNoSteps.analyzedInstructions);
      }
      setSimilarRecipes(chiliAnalysis.recipes);
    } else if (currentRecipe == 3) {
      setTitle(fruitSaladInfo.title);
      setImageUrl(fruitSaladInfo.image);
      setIngredients(fruitSaladInfo.extendedIngredients);
      if (fruitSaladInfo.analyzedInstructions != '') {
        setSteps(fruitSaladInfo.analyzedInstructions);
      } else {
        setSteps(recipeInfoNoSteps.analyzedInstructions);
      }
      setSimilarRecipes(fruitSaladAnalysis.recipes);
    }
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
          <View style={styles.nestedScrollContainer}>
            <ScrollView style={{borderRadius: 10}} nestedScrollEnabled={true}>
              {listSimilarRecipes}
            </ScrollView>
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
    padding: 15,
    paddingHorizontal: 10,
    width: '87%'
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
    width: '97%',
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
    padding: 5,
    width: '95%'
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
    backgroundColor: palette.darkBlue,
    marginVertical: 0,
    borderBottomColor: palette.white,
    borderBottomWidth: 2
  },
  similarRecipes:{
    fontSize: 18,
    color: palette.white,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    padding: 15
  },
  nestedScrollContainer: {
    height: 200,
    borderWidth: 2,
    borderColor: palette.white,
    margin: 10,
    borderRadius: 10
  }
});