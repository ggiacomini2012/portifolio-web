import React from 'react';
import { Provider } from 'react-redux';
import Router from './react/Router/Router';
import store from './react/state-manager/redux/store';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
