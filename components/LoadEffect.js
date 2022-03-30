import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

export default function LoadEffect (){
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