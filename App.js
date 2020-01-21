import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
import { Provider } from './context/NumbersContext'
// import ReduxThunk from 'redux-thunk';
// import numberReducer from './store/numbers-reducer';
import { init } from './helpers/db';

import MainNavigator from './navigation/MainNavigator';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });
  
// const rootReducer = combineReducers({
//   numbers : numberReducer
// })

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <Provider><MainNavigator /></Provider>;
}
