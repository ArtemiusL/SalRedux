import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduceBlank from './reducers/index';
import App from './components/App';

let store = createStore(reduceBlank);
console.log(store);
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, app)
module.hot.accept();