import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Fonts, Colors } from '../constants/styles/Base'


const renderLeft = () => {
    return (
        <View style={styles.leftAction}>
            <Text style={styles.leftActionText}>Delete</Text>
        </View>
    )
}

const CategoryItem = props => {
    return (
        <Swipeable
            renderLeftActions={renderLeft}
            onSwipeableLeftOpen={props.onSwipeFromLeft}
        >
            <TouchableOpacity activeOpacity={1} onPress={props.onSelect} style={styles.categoryItem}>
                <View style={styles.categoryTextContainer}>
                    <Text style={styles.textCategory}>{props.amount}/{props.max}</Text>
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    categoryItem:{
        borderColor: '#dedede',
        borderBottomWidth:1,
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    categoryTextContainer:{
        alignItems: 'center',
    },
    textCategory: {
        fontFamily: Fonts.bold,
        fontSize: Fonts.md
    },
    leftAction: {
        backgroundColor: '#dedede',
        justifyContent: 'center',
        flex:1
    },
    leftActionText: {
        color: 'white',
        fontFamily: Fonts.bold,
        padding: 20
    }
});

export default CategoryItem;