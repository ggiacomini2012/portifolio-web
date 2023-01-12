import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Router from '../Router/Router';
import store from '../state-manager/redux/store';
import './app.css';

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

setTimeout(() => {
  ReactDOM.createRoot(root).render(
    <App />,
  );
  root!.style.display = 'flex';
}, 500);
setTimeout(() => {
  root!.style.opacity = '1';
}, 1000);

export default App;
