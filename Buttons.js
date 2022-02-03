import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Buttons = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Continue as Guest</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    buttonContainer: {
        padding: 15,
        margin: 20,
        width: 300,
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 10
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#a2d2ff"
    }
})

export default Buttons;