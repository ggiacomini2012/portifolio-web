import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Router from '../Router/Router';
import store from '../state-manager/redux/store';
import './app.css';
import preLoad from './functions/preLoad';

const root = document.getElementById('root') as HTMLElement;

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
}

preLoad(ReactDOM, root, <App />);

export default App;
