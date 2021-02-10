import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducer';
import { ChakraProvider } from "@chakra-ui/react"

const authData =localStorage.getItem('profile')?JSON.parse(localStorage.getItem('profile')):[]
const initialState = {

    authData
}
const store = createStore(reducers,initialState, compose(applyMiddleware(thunk)));


ReactDOM.render(
<Provider  store={store}>
<ChakraProvider>
<App />
</ChakraProvider>

</Provider>

,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
