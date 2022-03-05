import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import Recipe from "../screens/Recipe";
import History from "../screens/History";
import Welcome from "../screens/Welcome";
import Pizza from "../screens/Pizza";
import { HeaderTitle } from "react-navigation-stack";



const Stack = createStackNavigator();

const WelcomeStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor:'#ffafcc'},
          title: false,
        }}
      >
        <Stack.Screen name="Welcome Page" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home Page" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="History Page" component={History} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Pizza Page" component={Pizza} />

        {/* if neeed */}
        {/* <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
    );
}
const HomeStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor:'#ffafcc'},
          title: false,
        }}  
      >
        <Stack.Screen name="Home Page" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="History Page" component={History}  />
        <Stack.Screen name="Pizza Page" component={Pizza} />

        {/* if neeed */}
        {/* <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
    );
}
const HistoryStackNavigator = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor:'#ffafcc'},
          title: false,
        }} >
        <Stack.Screen name="History Page" component={History} options={{headerShown: false}}/>
        <Stack.Screen name="Pizza Page" component={Pizza} />

      </Stack.Navigator>
    );
}

export {WelcomeStackNavigator, HomeStackNavigator, HistoryStackNavigator };