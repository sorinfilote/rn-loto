import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NumberItem = props => {
    return (
        <TouchableOpacity 
        style={{ ...styles.numberItem, ...styles.backgroundRed }}
        onPress={() => console.log(props)}>
            <View>
                <Text style={styles.textItem}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    numberItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
        margin: 5
      },
      backgroundRed: {
          backgroundColor: 'red'
      },
      backgroundBlue: {
          backgroundColor: 'blue'
      },
      textItem:{
        fontSize: 25,
        color: 'white'
      }
});

export default NumberItem;