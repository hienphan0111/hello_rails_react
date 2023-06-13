// Entry point for the build script in your package.json
import '@hotwired/turbo-rails'
import './controllers'
import App from './components/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
