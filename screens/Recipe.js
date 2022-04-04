import { TouchableOpacity, SafeAreaView, ScrollView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { palette } from '../assets/Colors.js';
import { useNavigationParam } from '@react-navigation/native';
// placeholder recipe 1 - burger
import recipeAnalysis from '../assets/placeholders/burgerAnalysis.json';
import recipeInfo from '../assets/placeholders/burgerInfo.json';
import recipeInfoNoSteps from '../assets/placeholders/recipeInfoNoSteps.json';

function compare(a, b) {
  const distA = a.res.output.distance;
  const distB = b.res.output.distance;
  let comparison = 0;
  if (distA > distB) {
      comparison = 1;
  } else if (distA < distB) {
      comparison = -1;
  }
  return comparison;
}

var deepApiKey = 'a91c00d9-753b-4df4-b201-21278d21eecf';
const spoonKey = "1eed4400787247809896c66ce2868585";

const clarfaiUserId = 'azu12kuyampw';
const clarfaiAppId = '0a0463fe83dd477782008bfe418a4e1f';
const clarfaiKey = '1631f0d390624615b86054111e14b211';

export default function Recipe() {

  let recipeArr = [];
  var numRecipes_spoon = 10;
  var numIngredients = 10;

  function fetchDistances(data, targetUrl) {
    let tempUrls = data.map(x => x.image);
    let arr = new Array;
    let fetches = [];
    for (var i = 0; i < tempUrls.length; i++) {
  
      let recipe = data[i];
  
      const raw = {
        'image1': targetUrl,
        'image2': tempUrls[i]
      };
  
      let urlParameters = Object.entries(raw).map(e => e.join('=')).join('&');
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'User-Agent': 'python-requests/2.26.0',
          'Accept-Encoding': 'gzip, deflate',
          'Accept': '*/*',
          'Connection': 'keep-alive',
          'api-key': deepApiKey,
          'Content-Length': '245',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // body: "image1=https%3A%2F%2Fwww.foodiecrush.com%2Fwp-content%2Fuploads%2F2020%2F05%2FPenne-Marinara-Sauce-foodiecrush.com-004.jpg&image2=https%3A%2F%2Fwww.foodiecrush.com%2Fwp-content%2Fuploads%2F2020%2F05%2FPenne-Marinara-Sauce-foodiecrush.com-004.jpg"
        body: urlParameters
      };
  
      fetches.push(
        fetch("https://api.deepai.org/api/image-similarity", requestOptions)
          .then(res => res.json())
          .then(res => {
            arr.push({ res, recipe });
          })
          .catch (error => console.log(error))
      );
    }
    Promise.all(fetches).then(function() {
      recipeArr = arr;
    })
  };
  
  function getRecipe(url) {
      const raw = JSON.stringify({
        "user_app_id": {
              "user_id": clarfaiUserId,
              "app_id": clarfaiAppId
          },
        "inputs": [
          {
            "data": {
              "image": {
                "url": url
              }
            }
          }
        ]
      });
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + clarfaiKey
        },
        body: raw
      };
    
      var ingredients = [];
    
      fetch("https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs", requestOptions)
        .then(response => response.text())
        .then(result => {
          var obj = JSON.parse(result, null, 2).outputs[0].data;
          var obj2 = obj.concepts;
          //get clarfai ingredients
          for (var i = 0; i < obj2.length; i++) {
            if (i < numIngredients) {
              ingredients[i] = obj2[i].name;
            }
          }
          var strIngredients = ingredients.toString();
          //pass ingredients as string to spoonacular, findByIngredients
          var numberOfRecipes = numRecipes_spoon;
          fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + spoonKey + "&ingredients=" + strIngredients + "&ranking=2&number=" + numberOfRecipes)
            .then(response1 => response1.json())
            .then((data) => {
              fetchDistances(data, url);
            })
            .catch(error => console.log('spoonacular error', error));
          })
          .catch(error => console.log('clarfai error', error));
  }

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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

  const renderSimilarRecipe = (id) => {
    displayRecipe(id, true);
  };

  //stores similar recipes
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const listSimilarRecipes = similarRecipes.filter(x => x.title !== title).map((i) => 
    <TouchableOpacity onPress={() => renderSimilarRecipe(i.id)} style={styles.similarRecipesContainer} key={i.id}>
      <Text style={styles.similarRecipes} key={i.id}>{i.title}</Text>
    </TouchableOpacity>
  );

  const getFoodInfo = () => {
    fetch(
        'https://api.spoonacular.com/food/images/analyze?apiKey=' + spoonKey + '&imageUrl=' + imageUrl
    )
    .then((response) => response.json())
    .then((data) => {
      const id = data.recipes[0].id;
      fetch (
        'https://api.spoonacular.com/recipes/' + id  + '/information?apiKey=' + spoonKey
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

  const displayRecipe = (id, isSim) => {
    fetch (
      'https://api.spoonacular.com/recipes/' + id  + '/information?apiKey=' + spoonKey
    )
    .then((response) => response.json())
    .then((data) => {
      setTitle(data.title);
      setImageUrl(data.image);
      setIngredients(data.extendedIngredients);
      if (data.analyzedInstructions != '') {
        setSteps(data.analyzedInstructions);
      } else {
        setSteps(recipeInfoNoSteps.analyzedInstructions);
      }
      if (!isSim) {
        let simRecipes = recipeArr.map(x => x.recipe);
        setSimilarRecipes(simRecipes);
      };
    })
    .catch(() => {
      //alert("recipe not found!");
      setTitle("Recipe")
    })
  };

  // const a = "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg";
  const a = "https://i.ibb.co/YXpKLH3/image0.jpg";

  //Called every when page first rendered and every time page is updated
  useEffect(() => {
    // getFoodInfo();
    // getPlaceholderInfo();
    getRecipe(a);
    const setData = () => {
      if (recipeArr.length !== 0) {
        try {
          recipeArr.sort(compare);
        } catch (err) {
          console.log("deep ai image similarity error", err);
        }
        let tempRecipe = recipeArr[0].recipe;
        displayRecipe(tempRecipe.id, false);
      }
    };
    const timer = setTimeout(() => {
      setData();
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

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