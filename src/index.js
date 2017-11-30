import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduceBlank from './reducers/index';
import App from './components/App';
import {updateLocalStorage} from './Util/updateLocalStorage';
import './style/style.css';

let store = createStore(reduceBlank,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Подпишимся на обновления стора чтобы обновлять локал сторадж
let unsubscribe = store.subscribe(() => {
	updateLocalStorage(store.getState());
})
  	
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, app)
module.hot.accept();