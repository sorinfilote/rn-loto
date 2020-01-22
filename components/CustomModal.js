import React, { useState } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';

const CustomModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
   
   
    const toggleModal = (visible) => {
      setModalVisible(visible);
   }

    return (
        <View style = {styles.container}>
        <Modal 
            animationType = {"slide"} 
            transparent = {false}
            visible = {modalVisible}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <View style = {styles.modal}>
                <Text style = {styles.text}>Modal is open!</Text>
                <TouchableHighlight onPress = {() => { toggleModal(!modalVisible)}}>
                    <Text style = {styles.text}>Close Modal</Text>
                </TouchableHighlight>
            </View>
        </Modal>
        
        <TouchableHighlight onPress = {() => { toggleModal(true)}}>
            <Text style = {styles.text}>Open Modal</Text>
        </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 100
   },
   modal: {
      flex: 1,
      alignItems: 'center',
    //   backgroundColor: 'red',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
})

export default CustomModal;