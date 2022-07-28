import Footer from './Footer';
import { ChildrenProps } from '@/types';

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
