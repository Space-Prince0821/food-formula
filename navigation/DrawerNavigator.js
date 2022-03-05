import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNavigator } from "./StackNavigator";
import { WelcomeStackNavigator } from "./StackNavigator";
import { HistoryStackNavigator } from "./StackNavigator";
import InfoButton from '../screens/InfoButton';
import { StatusBar } from 'expo-status-bar';


function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/logo_white.png')}
      />
    );
  }
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
        initialRouteName="Welcome"
          
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#ffafcc',
              width: 250
            },
            drawerPosition:'left',
            overlayColor: '#ffffff90',
            headerShown: true,
            swipeEnabled: false,

            //header
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#ffafcc'
            },
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            },

            //drawer page
            drawerActiveTintColor: 'blue',
            drawerInactiveTintColor: '#ffffff',
            drawerInactiveBackgroundColor: '#ffffff60',
            drawerLabelStyle: {
              fontSize: 25,
              fontWeight:'bold',
            }
          }}
    >
        <Drawer.Screen name="Welcome" component={WelcomeStackNavigator}            
            options={{
            title: 'Welcome',
            headerShown: false,
        }}/>
        <Drawer.Screen name="Home" component={HomeStackNavigator} 
            options={{
                title: 'Home',
                headerRight: () => (
                  <View>
                    <View>
                      <InfoButton/>
                    </View>
                    <StatusBar style="auto" />
                  </View>
                ),
            }}
        />
        <Drawer.Screen name="History" component={HistoryStackNavigator} 
            options={{
                title: 'History',
                headerRight: () => (
                  <View>
                    <View>
                      <InfoButton/>
                    </View>
                    <StatusBar style="auto" />
                  </View>
                ),
            }}
        />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;