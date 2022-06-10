/* eslint-disable no-underscore-dangle */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(<StrictMode>{app}</StrictMode>);
