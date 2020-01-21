import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { Colors } from '../constants/styles/Base';
import { useDispatch } from 'react-redux';

import * as numbersActions from '../store/numbers-actions';

const AddNewCategoryScreen = props => {
  [minValue, setMinValue] = useState('');
  [maxValue, setMaxValue] = useState('');
  [amountValue, setAmountValue] = useState('');

  const dispatch = useDispatch();

  const minValueChangeHandler = text => {
    //validation 
    setMinValue(text);
  }
  const maxValueChangeHandler = text => {
    setMaxValue(text);
  }
  const amountValueChangeHandler = text => {
    setAmountValue(text);
  }

  const saveNumbersHandler = () => {
    console.log(minValue);
    
    dispatch(numbersActions.addNumbers(minValue, maxValue, amountValue));
    props.navigation.goBack();
  }

  return (
    <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Min</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={minValueChangeHandler} 
            value={minValue}
            defaultValue="1"
            keyboardType="numeric" 
          />
          <Text style={styles.label}>Max</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={maxValueChangeHandler} 
            value={maxValue} 
            keyboardType="numeric" 
          />
          <Text style={styles.label}>Amount</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={amountValueChangeHandler} 
            value={amountValue} 
            keyboardType="numeric" 
          />
          <Button title="Save" color="red" onPress={saveNumbersHandler} />
        </View>
    </ScrollView>
  )
}

AddNewCategoryScreen.navigationOptions = {
    headerTitle: 'Create New Numbers'
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      margin: 30,
    },
    label: {
      marginBottom: 15,
      fontSize: 18
    },
    input: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginBottom: 15,
      paddingVertical: 4,
      paddingHorizontal: 2
    }
  });

export default AddNewCategoryScreen;