import { ReactElement, ReactNode } from 'react';

export type ChildrenProps = {
  children?:
  ReactNode | ReactNode[] | ReactElement | ReactElement[] | JSX.Element;
};