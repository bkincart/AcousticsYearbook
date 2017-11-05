import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/src/App';
import { createStore } from 'redux';

import rootReducer from '../react/src/store/rootReducer'

let store = createStore(rootReducer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
})
