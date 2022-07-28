import ContextProvider from '@/context';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ChildrenProps } from '@/types';

const TestWrapper: React.FC<ChildrenProps> = ({ children }) => (
  <Provider store={store}>
    <ContextProvider>{children}</ContextProvider>
  </Provider>
);

export default TestWrapper;
