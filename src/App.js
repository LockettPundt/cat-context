/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import './App.css';
import { StateProvider } from './context';


const App = () => {
  const initialState = {
    name: 'lockett',
    activity: 'coding',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };


  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <h1>
          Hi there.
        </h1>
      </StateProvider>
    </div>
  );
};

export default App;
