/* eslint-disable react/jsx-filename-extension */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
/* eslint-enable */
