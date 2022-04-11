import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadEffect() {
    return(
        <View style = { [ StyleSheet.absoluteFillObject, styles.container]}>
            <ActivityIndicator 
            size = "large"
            color = {"white"}
            animating = {true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1
    }
})