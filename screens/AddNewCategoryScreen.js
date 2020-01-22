import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/NumbersContext';


const AddNewCategoryScreen = props => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  const { addNumbers } = useContext(Context);

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
    addNumbers(minValue, maxValue, amountValue);
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