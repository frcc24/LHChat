

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import Routes from './Routes';


const App = () => {

  return (
    <Provider store={createStore(reducers)}>
      <Routes />
    </Provider>
        

  );
};



export default App;
