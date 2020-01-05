import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useDispatch } from 'react-redux';
import * as numbersActions from '../store/numbers-actions';

import HeaderButton from '../components/HeaderButton';
import NumberItem from '../components/NumberItem';

import generateNumbers from '../helpers/generateNumbers';



const SingleCategoryScreen = props => {
  const id = props.navigation.getParam('id');
  const min = props.navigation.getParam('min');
  const max = props.navigation.getParam('max');
  const amount = props.navigation.getParam('amount');
  
  [numbers, setNumbers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let newNumbers = generateNumbers(min, max, amount);
    setNumbers(newNumbers);
  }, [])

  // useEffect(() => {
  //   props.navigation.setParams({ generateNew: generateNumHandler });
  // }, [generateNumHandler]);
  
  // const generateNumHandler = useCallback(() => {
  //   let newNumbers = generateNumbers(min, max, amount);
  //   setNumbers(newNumbers);
  // }, [amount]);

  useEffect(() => {
    props.navigation.setParams({ deleteNumbers: deleteNumbersHandler });
  }, [deleteNumbersHandler]);

  const deleteNumbersHandler = () => {
    dispatch(numbersActions.deleteNumbers(id));
    props.navigation.goBack();
  };
  
  return (
    <ScrollView style={styles.megaContainer}>
      <View style={styles.container}>
        {numbers.map(number => <NumberItem key={number}>{number}</NumberItem>)}
      </View>
    </ScrollView>
    
  )
}

SingleCategoryScreen.navigationOptions = navData => {
  const title = `${navData.navigation.getParam('amount')} / ${navData.navigation.getParam('max')}`; 
  // const generateNew = navData.navigation.getParam('generateNew');
  const deleteNumbers = navData.navigation.getParam('deleteNumbers');
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Delete numbers"
          iconName={Platform.OS === 'android' ? 'md-remove-circle-outline' : 'ios-remove-circle-outline'}
          onPress={deleteNumbers}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: 20,
    },
    megaContainer: {
      flex: 1
    }

  });

export default SingleCategoryScreen;