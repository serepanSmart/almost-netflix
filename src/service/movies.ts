import Movie from '@/assets/movie.png'

export interface IMovie {
  id: string | number;
  title: string;
  genre: string;
  year: string | number;
  src: string;
}

const movies: IMovie[] = [
  {
    id: 'a1',
    title: 'First Movie',
    genre: 'Action & Adventure',
    year: 2021,
    src: `${Movie}`
  },
  {
    id: 'c2',
    title: 'Second Movie',
    genre: 'Comedy',
    year: 2018,
    src: `${Movie}`
  },
  {
    id: 'h3',
    title: 'Third Movie',
    genre: 'Horror',
    year: 2017,
    src: `${Movie}`
  },
  {
    id: 'c4',
    title: 'First Movie',
    genre: 'Crime',
    year: 2004,
    src: `${Movie}`
  },
  {
    id: 'c5',
    title: 'First Movie',
    genre: 'Crime',
    year: 2021,
    src: `${Movie}`
  },
  {
    id: 'd5',
    title: 'Second Movie',
    genre: 'Documentary',
    year: 2014,
    src: `${Movie}`
  },
  {
    id: 'd6',
    title: 'Third Movie',
    genre: 'Documentary',
    year: 2000,
    src: `${Movie}`
  },
];

export default movies;