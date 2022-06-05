/* eslint-disable max-len */
import One from '@/assets/one.png';
import Two from '@/assets/two.jpg';
import Three from '@/assets/three.jpg';

export interface IMovie {
  id: string | number;
  title: string;
  genre: string;
  year: string | number;
  src: string;
  description?: string;
  runtime?: string;
  rating?: number;
}

const movies: IMovie[] = [
  {
    id: 'a1',
    title: 'First Movie',
    genre: 'Action & Adventure',
    year: 2021,
    src: `${One}`,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: '1h 45min',
    rating: 8.8,
  },
  {
    id: 'c2',
    title: 'Second Movie',
    genre: 'Comedy',
    year: 2018,
    src: `${Two}`,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: '1h 30min',
    rating: 7.8,
  },
  {
    id: 'h3',
    title: 'Third Movie',
    genre: 'Horror',
    year: 2017,
    src: `${Three}`,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: '2h 15min',
    rating: 9.5,
  },
  {
    id: 'c4',
    title: 'First Movie',
    genre: 'Crime',
    year: 2004,
    src: `${One}`,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: '1h 30min',
    rating: 7.7,
  },
  {
    id: 'c5',
    title: 'First Movie',
    genre: 'Crime',
    year: 2021,
    src: `${Two}`,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: '1h 55min',
    rating: 8.9,
  },
  {
    id: 'd5',
    title: 'Second Movie',
    genre: 'Documentary',
    year: 2014,
    src: `${Three}`,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: '2h 20min',
    rating: 9.2,
  },
  {
    id: 'd6',
    title: 'Third Movie',
    genre: 'Documentary',
    year: 2000,
    src: `${One}`,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: '1h 47min',
    rating: 8.1,
  },
];

export default movies;