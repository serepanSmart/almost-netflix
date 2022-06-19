export interface IMovie {
  id: number | string;
  budget?: number;
  title: string;
  genres: string[];
  posterPath: string;
  releaseDate: string;
  onCLick?: () => void;
  overview?: string;
  tagline?: string;
  revenue?: number;
  runtime?: number;
  rating?: number;
  voteCount?: number;
  card: IMovie;
}