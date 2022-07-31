import { GetServerSideProps } from 'next';
import SearchPage, {
  searchPageServerSidePropsGetter,
} from '@/components/SearchPage';

export const getServerSideProps: GetServerSideProps =
  searchPageServerSidePropsGetter;

export default SearchPage;
