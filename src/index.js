/* eslint-disable react/jsx-filename-extension */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';

import './index.css';
import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
console.log(store);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
/* eslint-enable */
