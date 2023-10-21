import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'

import './styles/application.css';
import App from './components/app';

import citiesReducer from './reducers/cities_reducer.js'
import activeCityReducer from './reducers/active_city_reducer.js'

const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
