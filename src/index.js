import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// function logger(obj, next, action) (here logger is taking 3 arguments and below is the currying function for it)
// logger(obj)(next)(action)
const logger = function ({dispatch, getState}) {
  return function (next) { 
    return function (action) {
      // middleware code
      console.log('ACTION_TYPE = ', action.type);
      next(action); // calling the next middleware if any. If there's not any then instead of next dispatch function will be called and action will be sent to reducer.
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store);
// console.log('Before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })

// console.log('After state', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);