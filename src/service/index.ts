import { Option } from '@/UI';
export interface IMovie {
  id?: number;
  budget?: number;
  title?: string;
  genres?: string[] | Option[];
  'poster_path'?: string;
  'release_date'?: string;
  onCLick?: () => void;
  overview?: string;
  tagline?: string;
  revenue?: number;
  runtime?: number;
  'vote_average'?: number;
  voteCount?: number;
  card: IMovie;
}