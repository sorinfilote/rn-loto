import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { NUMBERS } from '../data/dummy-data';
import * as numbersActions from '../store/numbers-actions';

import CategoryItem from '../components/CategoryItem';


const CategoriesScreen = props => {
    const numbers = useSelector(state => state.numbers.numbers);
    // console.log(numbers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(numbersActions.setNumbers());
    }, [dispatch]);

    const swipeLeftHandler = (id) => {
        dispatch(numbersActions.deleteNumbers(id));
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* {console.log(numbers)} */}
                <FlatList
                keyExtractor={item => item.id}
                data={numbers}
                renderItem={itemData => (
                    <CategoryItem
                        amount={itemData.item.amount}
                        max={itemData.item.max}
                        onSwipeFromLeft={() => swipeLeftHandler(itemData.item.id)}
                        onSelect={()=> {
                            props.navigation.navigate('SingleCategory',{
                                id: itemData.item.id,
                                min: itemData.item.min,
                                max: itemData.item.max,
                                amount: itemData.item.amount
                            })
                        }}
                    />
                )}
                />
            
            <Button
                title="Add new"
                onPress={() => (
                    props.navigation.navigate('AddCategory')
                )}
            />
          
        </SafeAreaView>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'All Categories'
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      marginVertical: 10,
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default CategoriesScreen;