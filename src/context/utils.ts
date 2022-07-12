import { Option } from '@/UI';

export const defaultOptions: Option[] = [
  { value: 'release_date', label: 'Release Date' },
  { value: 'vote_average', label: 'Rating' },
];

const defaultOrder = 'sortOrder=desc';
export const defaultOption = defaultOptions[0].value;

export const urlConstructor = (
  select = defaultOption,
  genre = '',
  movieId = '',
  search = '',
  order = defaultOrder,
): string => {
  // eslint-disable-next-line max-len
  return `?${search ? `search=${search}&searchBy=title&` : ''}${movieId ? `movie=${movieId}&` : ''}sortBy=${select}&${order}${genre ? `&filter=${genre}` : ''}`;
};