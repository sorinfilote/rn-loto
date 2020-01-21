import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
import { Context } from '../context/NumbersContext';

import { Ionicons } from '@expo/vector-icons';

import CategoryItem from '../components/CategoryItem';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CategoriesScreen = props => {
    const { state, setNumbers, deleteNumbers } = useContext(Context);

    useEffect(()=> {
        setNumbers();

        const listener = props.navigation.addListener('didFocus', () => {
            setNumbers();
        });

        return () => {
            listener.remove();
        }
    }, [])

    const swipeLeftHandler = (id) => {
        deleteNumbers(id);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* {console.log(state)} */}
                <FlatList
                keyExtractor={item => item.id.toString()}
                data={state}
                renderItem={itemData => (
                    <CategoryItem
                        amount={itemData.item.amount}
                        max={itemData.item.max}
                        navigation={props.navigation}
                        onSwipeFromLeft={() => swipeLeftHandler(itemData.item.id)}
                        // onSwipeFromRight={() => console.log('swipe right')}
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
            <View
                style={styles.absoluteAddBtn}>
                <TouchableOpacity
                    onPress={() => (
                        props.navigation.navigate('AddCategory')
                    )}>
                        <Ionicons name="md-add-circle" size={50} color="#444" />
                </TouchableOpacity>
            </View>
            
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
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    absoluteAddBtn: {
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 30,
        right: 20,
    },
  });

export default CategoriesScreen;