import { Option } from '@/UI';

export const defaultOptions: Option[] = [
  { value: 'release_date', label: 'Release Date' },
  { value: 'vote_average', label: 'Rating' },
];

const showLimit = 'limit=15';
const defaultOrder = 'sortOrder=desc';
export const defaultOption = defaultOptions[0].value;

export const urlConstructor = (
  select = defaultOption,
  genre = '',
  order = defaultOrder,
  limit = showLimit
): string => {
  return genre
    ? `?sortBy=${select}&${order}&filter=${genre}&${limit}`
    : `?sortBy=${select}&${order}&${limit}`;
};