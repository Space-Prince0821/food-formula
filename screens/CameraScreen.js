import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Camera } from "expo-camera";
import flip from "../assets/flip.jpg";
import * as ImagePicker from "expo-image-picker";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import supabase from '../supabase-client';
import uuid from "uuid";
//import { firebase } from "@react-native-firebase/auth";
//import * as firebase from "firebase";

export default function CameraScreen() {
  const navigation = useNavigation();
  let camera = new Camera({});

  //Camera state
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Access to camera denied</Text>;
  }

  const pictureTaken = async () => {
    if (camera) {
      var data = await camera.takePictureAsync(null);
    }
    setImageUri(data.uri);
    const pic = data.uri;
    const names = pic.substring(pic.lastIndexOf("/") + 1);

    //await uploadImage(data.uri, names);

    const storage = getStorage();
    const filename = pic.substring(pic.lastIndexOf("/") + 1);
    const reference = ref(storage, filename);

    const img = await fetch(data.uri);
    const bytes = await img.blob();

    await uploadBytes(reference, bytes).then(() => {
        console.log("Uploaded successfully!");
    }).catch((error) => {
        console.log(error.message, "error uploading image");
    });

    getURL(reference);
  };


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      console.log(result.uri);

      const storage = getStorage();
      const filename = imageUri.substring(imageUri.lastIndexOf("/") + 1);
      const reference = ref(storage, filename);

      const img = await fetch(result.uri);
      const bytes = await img.blob();

      //Issue over here
      await uploadBytes(reference, bytes)
        .then(() => {
          console.log("Uploaded successfully!");
        })
        .catch((error) => {
          console.log(error.message, "error uploading image");
        });

      getURL(reference);
    }
  };

  const getURL = async (reference) => {
    await getDownloadURL(reference).then((x) => {
      console.log(x);
      navigation.navigate("RecipeScreen", { imageURL: x });
    });
  };

  return (
    <SafeAreaView>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}
      >
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Image style={styles.touchContainer} source={flip} alt={"Flip"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={pictureTaken}>
            <Image
              source={{
                uri: "https://www.mcicon.com/wp-content/uploads/2021/02/Technology_Camera_1-copy-8.jpg",
              }}
              style={styles.cameraSelect}
            />
            <Text title={"Gallery"} onPress={pickImage} />
            <TouchableOpacity onPress={pickImage}>
              <Image source={{ uri: imageUri }} style={{ flex: 0.7 }} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </Camera>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraSelect: {
    width: 60,
    height: 60,
    overflow: "hidden",
    borderRadius: 150 / 3,
  },
  camera: {
    width: 414,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  touchContainer: {
    padding: 15,
    marginBottom: 10,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 150 / 3,
  },
  buttons: {
    width: 410,
    height: 140,
    padding: 5,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});
