import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Camera } from "expo-camera";
import { AutoFocus, CameraType } from "expo-camera/build/Camera.types";
import flip from '../assets/flip.jpg';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() {
    const navigation = useNavigation();

    //Camera state
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        }) ();
    },  []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>Access to camera denied</Text>;
    }

    const pictureTaken = async () => {
        if (camera) {
            const data = await this.camera.takePictureAsync(null);
            console.log(data.uri);
            setImageUri(data.uri);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
          setImageUri(result.uri);
        }
    };

  return (
    <View >
      <Camera style={styles.camera} 
        type={type}
        ref={(ref) => {camera = ref}}
        >
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        )
                    }}>
                    <Image style={styles.touchContainer} source={flip} alt={"Flip"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={pictureTaken}>
                    <Image source={{ uri: 'https://www.mcicon.com/wp-content/uploads/2021/02/Technology_Camera_1-copy-8.jpg' }} style={styles.cameraSelect} />
                    <Text title={'Gallery'} onPress={pickImage} />
                    <Image source={{ uri: imageUri}} style={{ flex: 1 }}/>
                </TouchableOpacity>
            </View>
        </Camera>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraSelect: {
        width: 60,
        height: 60,
        overflow: "hidden",
        borderRadius: 150/3,
    },
    camera: {
        width: 414,
        alignItems: 'center',
        justifyContent: 'center',
        height: 750,
    },
    touchContainer: {
        padding: 15,
        marginBottom: 10,
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 150/3,
    },
    buttons: {
        width: 410,
        height: 140,
        padding: 5,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    }
});