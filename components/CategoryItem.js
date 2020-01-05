import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.categoryItem}>
            <View style={styles.categoryTextContainer}>
                <Text>{props.amount}/{props.max}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryItem:{
        backgroundColor: '#dedede',
        marginBottom: 35,
        padding: 30
    },
    categoryTextContainer:{
        alignItems: 'center'
    }
});

export default CategoryItem;