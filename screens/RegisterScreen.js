import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, PlatformColor } from 'react-native'
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import app from '../components/firebase';
import { palette } from '../assets/Colors.js';

const RegisterScreen = () => {
  const app = app;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            navigation.replace("Home");
        }
        else {
            console.log("User is logged out!");
        }
    });
    return unsubscribe;
  }, []);

    const handleSignUp = () => {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    console.log("Registered with:", user.email);
                })
                .catch(error => alert(error.message))
        } else {
            alert("Passwords do not match. Please try again.");
        }
  };

  return (
   <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
   >
       <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
        <TextInput 
            placeholder='Comfirm Password'
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            style={styles.input}
            secureTextEntry
        />
       </View>
       
       <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
       </View>
   </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.blue
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: 15
    },
    buttonContainer: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: palette.orange,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: palette.orange,
        marginTop: 15,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
});

export default RegisterScreen;