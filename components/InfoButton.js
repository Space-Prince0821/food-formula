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
                    <Button style={styles.button} title="i" color={palette.orange} onPress={() => setModalVisible(true)}/>
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
                                    style={styles.button}
                                    color={palette.orange}>
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
        width: 40,
        height: 40,
        padding: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    button: {
        backgroundColor: 'white',
        color: palette.orange,
        fontWeight: 'bold'
    },
    buttonLayout: {
        marginTop: 60,
        alignItems: 'flex-end',
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 100
    },
    modalContainer: {
        flex: 1,
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
        fontSize: 24,
        marginTop: 30,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5
    }
});

export default InfoButton;