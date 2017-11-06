import React from 'react';
import { render } from 'react-dom';
import App from '../react/src/App';
import configureStore from '../react/src/store/configureStore';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  render(<App store={store}/>, document.getElementById('app'));
})
