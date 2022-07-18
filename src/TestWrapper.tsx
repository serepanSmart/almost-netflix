import ContextProvider from '@/context';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@/redux/store';
import { ChildrenProps } from '@/types';

const TestWrapper: React.FC<ChildrenProps> = ({ children }) => (
  <Provider store={store}>
    <Router>
      <ContextProvider>{children}</ContextProvider>
    </Router>
  </Provider>
);

export default TestWrapper;
