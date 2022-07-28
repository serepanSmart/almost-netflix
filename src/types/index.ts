import { IMovie } from '@/service';
import { ReactElement, ReactNode } from 'react';

export type ChildrenProps = {
  children?:
  ReactNode | ReactNode[] | ReactElement | ReactElement[] | JSX.Element;
};

export type MoviesListProps = {
  list: IMovie[];
};