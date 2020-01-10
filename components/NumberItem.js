import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NumberItem = props => {
    // console.log(props.children);
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={{ ...styles.numberItem }}
            onPress={() => {
                console.log('');
            }}>
                <View>
                    <Text style={styles.textItem}>{props.children}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
    },
    numberItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
        margin: 5,
        backgroundColor: 'red'
      },
      backgroundRed: {
          backgroundColor: 'red'
      },
      backgroundGray: {
          backgroundColor: 'gray'
      },
      textItem:{
        fontSize: 25,
        color: 'white'
      }
});

export default NumberItem;