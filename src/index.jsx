import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore, combineReducers } from 'redux'

import './styles/index.css';
import App from './components/App';

// import reducer from './reducers/'

// const reducers = combineReducers({
//   // state: reducer
// })

ReactDOM.render(
  <Provider >
  {/* <Provider store={configureStore(reducers)} > */}
    <App />
  </Provider>,
  document.getElementById('root')
)
