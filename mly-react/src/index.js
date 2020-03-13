import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import App from './Component/Root/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import ConfigureStore from "./Redux/Reducers/ConfigureStore"
import {BrowserRouter} from "react-router-dom"


const store = ConfigureStore();
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
