import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';

const FoodAPI = props => {
    const getFoodInfo = props => {
        fetch(
            'https://api.spoonacular.com/food/images/analyze?apiKey=4b70e356c2ad48e58244c333fd2693b5&imageUrl=' + props.imageUri
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
        <View style={styles.container}>
            <Text>Recipe testing</Text>
            <Button title="Click to view food info!" onPress={getFoodInfo}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default FoodAPI;