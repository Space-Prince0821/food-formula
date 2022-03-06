import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function Recipe() {
  const getFoodInfo = () => {
    fetch(
        'https://api.spoonacular.com/food/images/analyze?apiKey=4b70e356c2ad48e58244c333fd2693b5&imageUrl=https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'
    )
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch(() => {
        console.log('error')
    });
  }

  return (
    <View>
      <Text>Recipe testing</Text>
      <Button title="Click" onPress={getFoodInfo}></Button>
    </View>
  )
}

const styles = StyleSheet.create({

});