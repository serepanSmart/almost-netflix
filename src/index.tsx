import ReactDOM from 'react-dom/client';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));

const APP = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

root.render(APP);
