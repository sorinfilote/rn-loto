import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Platform, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import { Context } from '../context/NumbersContext';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import NumberItem from '../components/NumberItem';

import generateNumbers from '../helpers/generateNumbers';

const SingleCategoryScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const min = navigation.getParam('min');
  const max = navigation.getParam('max');
  const amount = navigation.getParam('amount');
  
  [numbers, setNumbers] = useState([]);
  [refreshing , setRefreshing] = useState(false);

  const { deleteNumbers } = useContext(Context);

  useEffect(() => {
    getNumbers();
  }, []);

  useEffect(() => {
    navigation.setParams({ deleteNumbers: deleteNumbersHandler });
  }, [deleteNumbersHandler]);

  const getNumbers = () => {
    let newNumbers = generateNumbers(min, max, amount).map(item => {
      return { number: item, clicked: false };
     });
     
    setNumbers(newNumbers);
    setRefreshing(false);
  }
  
  const deleteNumbersHandler = () => {
    deleteNumbers(id);
    navigation.goBack();
  };

  const onRefreshHandler = () => {
    setRefreshing(true);
    getNumbers();
  }
  const handlerNumberSelect = (nr) => {
    const numbersCopy = [...numbers];
    let numberIndex = numbersCopy.findIndex(
      item => item.number === nr 
    )
    numbersCopy[numberIndex].clicked=true;
    setNumbers(numbersCopy);
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList style={styles.list}
            keyExtractor={item => item.number.toString()}
            data={numbers}
            renderItem={itemData => (
                <NumberItem 
                  clicked={itemData.item.clicked} 
                  onSelect={handlerNumberSelect}
                  singleNumber={itemData.item.number} />
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshHandler}
              />
            }
            />
      </View>
    </SafeAreaView>
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
          iconName={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
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
      justifyContent: 'center',
      padding: 20,
    },
    list: {
      alignSelf: 'stretch',
    }
  });

export default SingleCategoryScreen;