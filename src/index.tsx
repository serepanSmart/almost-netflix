import ReactDOM from 'react-dom/client';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));

// THE ROOT CAUSE OF DOUBLE INITIAL RENDERING AND THEREFORE DOUBLE INITIAL API CALL IS USING StrictMode =>
// https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
// https://ru.reactjs.org/docs/strict-mode.html
// StrictMode CHECKING MIGHT BE OMITTED IN PROD OR IT CAN BE OMITTED IN EACH CASE, BECAUSE IN GENERAL
// IT SERVES FOR DETECTING OLD REACT API BUGS

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(APP);
