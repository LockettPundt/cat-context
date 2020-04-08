/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import './App.css';
import { StateProvider } from './context';
import CatPage from './components/CatPage';
import CatnameForm from './components/CatNameForm';
import CatActivityButtons from './components/CatActivitybuttons';

const App = () => {
  const initialState = {
    name: 'Chloe',
    activity: 'sleeping',
  };

  const reducer = (state, action) => {
    const { name, activity } = action;
    switch (action.type) {
      case 'ACTION_CHANGE_ACTIVITY':
        return {
          ...state,
          activity,
        };
      case 'ACTION_CHANGE_NAME':
        return {
          ...state,
          name,
        };
      default:
        return state;
    }
  };


  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <h1>What is the cat doing?</h1>
        <CatPage />
        <CatActivityButtons />
        <CatnameForm />
      </StateProvider>
    </div>
  );
};

export default App;
