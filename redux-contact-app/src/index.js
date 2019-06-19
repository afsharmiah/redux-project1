import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './Store/configureStore';

const store= configureStore();
ReactDOM.render(
<Provider store={store}>
<App /> </Provider>, document.getElementById('root'));
//registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
