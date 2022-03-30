import react, { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

const  InfoButton = props => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.buttonLayout}>
            <View style={styles.container}>
                <View style={{width: '100%'}}>
                    <Button 
                        title="i" onPress={() => setModalVisible(true)}
                        color="white"
                    />
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
                                    have to do is click on the camera in the center 
                                    to start scanning a dish! Then the app will provide 
                                    you with the ingredients as well as steps necessary to 
                                    make the dish that has been scanned!
                                </Text>
                            </View>
                            <View style={styles.closeView}>
                                <Button title="Close" 
                                    onPress={() => setModalVisible(!modalVisible)}>
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
        width: 42,
        height: 42,
        padding: 1,
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    },
    buttonLayout: {
        marginTop: 0,
        alignItems: 'flex-end',
        marginRight: 10,
        marginBottom: 12
    },
    modalContainer: {
        height: 550,
        padding: 20,
        borderWidth: 1,
        borderRadius: 40,
        marginVertical: 120,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#005778'
    },
    textView: {
        fontSize: 25,
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