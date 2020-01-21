import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NumberItem = props => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={{ ...styles.numberItem, backgroundColor:`${props.clicked ? '#dedede' : '#a9a9a9'}` }}
            onPress={() => {
                props.onSelect(props.singleNumber)
            }}>
                <View>
                    <Text style={styles.textItem}>{props.singleNumber}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1
    },
    numberItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
        marginVertical: 20,
      },
      textItem:{
        fontSize: 25,
        color: 'white'
      }
});

export default NumberItem;