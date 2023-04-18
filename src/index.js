import React from 'react';
import ReactDOM from 'react-dom/client';
import AppMain from './AppMain';
import { Provider } from 'react-redux';
import { store } from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
//Above creates a root with contains or renders all our react app that is the <AppMain /> Component.
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
  </Provider>
);

