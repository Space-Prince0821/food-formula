import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import React, { useState, useEffect} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Camera } from "expo-camera";
import { AutoFocus, CameraType } from "expo-camera/build/Camera.types";
import flip from '../assets/flip.jpg';
import * as ImagePicker from 'expo-image-picker';

const Home = () => {
    const auth = getAuth();
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LoginScreen");
            })
            .catch(error =>  alert(error.message))
    };

    const onPressHandler2 = () => {
        navigation.navigate("CameraScreen");
    };

    return(
        <View style={styles.container}>
            <View style={styles.container0}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Email: {auth.currentUser?.email}</Text>
            </View>
            <View style={styles.container3}>
                <Text style = {{fontWeight: 'bold', color: '#FFFFFF', fontSize: 40, marginBottom: 60, textAlign: 'center'}}>Welcome to Food Formula!</Text>
                <Image source={{ uri: 'https://www.mcicon.com/wp-content/uploads/2021/02/Technology_Camera_1-copy-8.jpg' }} style={styles.cameraSelect} />
                <TouchableOpacity
                    style = {styles.touchContainer}
                    onPress={onPressHandler2}>
                    <Text style = {styles.buttonText}>Click to scan dish!</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignOut}
                >
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container0: {
        marginTop: 90,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffafcc'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    container2: {
        marginTop: 50,
    },
    cameraSelect: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderWidth: 4,
        overflow: "hidden",
        borderRadius: 150/3,
      },
    touchContainer: {
        padding: 15,
        margin: 20,
        width: 300,
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 150/3
    },
    buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: "#a2d2ff"
    },
    returnContainer: {
      padding: 15,
      margin: 20,
      marginTop: 40,
      width: 300,
      alignItems: 'center'
    },
    returnText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#fff"
    },
    container3: {
        //borderWidth: 2,
        alignItems: 'center',
        marginTop: 70
    }
});

export default Home;