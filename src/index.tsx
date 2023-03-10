import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import functions from './react/global/functions';

const root = document.getElementById('root') as HTMLElement;

functions.preLoad(
  ReactDOM,
  root,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
