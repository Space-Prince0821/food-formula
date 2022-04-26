import react, { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import { transpileModule } from "typescript";
import { palette } from '../assets/Colors.js';

const  InfoButton = props => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.buttonLayout}>
            <View style={styles.container}>
                <View style={{width: '100%'}}>
                    <Button style={styles.button} title="i" onPress={() => setModalVisible(true)}/>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.modalContainer}>
                            <View>
                                <Text style={styles.textView}>
                                    Welcome to Food-Formula! Where you can scan 
                                    whatever dish  you'd like to recreate! All you
                                    have to do is click on the button below the camera
                                    to open your devices camera and start scanning your dish!
                                    Then the app will provide 
                                    you with the ingredients as well as steps necessary to 
                                    make the dish that has been scanned!
                                </Text>
                            </View>
                            <View style={styles.closeView}>
                                <Button 
                                    title="Close" 
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={styles.button}>
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        padding: 2,
        borderWidth: 3,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: palette.orange
    },
    buttonLayout: {
        marginTop: 60,
        alignItems: 'flex-end',
        marginRight: 20,
        backgroundColor: palette.orange
    },
    modalContainer: {
        height: 550,
        padding: 20,
        borderWidth: 2,
        borderRadius: 60,
        marginVertical: 120,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.orange
    },
    textView: {
        fontSize: 26,
        textAlign: 'center',
        color: 'white'
    },
    closeView: {
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 20
    }
});

export default InfoButton;