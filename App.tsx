import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { MainScreen } from './app/components/MainScreen';
import counterSlice from './app/redux/counterSlice';
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

const App = () => {
  return (<Provider store={store}>
    <MainScreen />
  </Provider>)
};

export default App;
