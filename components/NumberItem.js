import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

const NumberItem = (props) => {
    
    const animation = useAnimation({ doAnimation: props.clicked, duration: 1000 });

    const customAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [80, 130],
    })
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => {
                    props.onSelect(props.singleNumber)
                }}>
                    <Animated.View style={{
                        ...styles.numberContainer, 
                        width: customAnimation, 
                        height: customAnimation,
                        backgroundColor:`${props.clicked ? '#dedede' : '#a9a9a9'}` 
                    }} >
                        <Text style={styles.textItem}>{props.singleNumber}</Text>
                    </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1
    },
    numberContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a9a9a9',
        borderRadius: 50,
        marginVertical: 20,
    },
    textItem:{
    fontSize: 25,
    color: 'white'
    }
});

export default NumberItem;