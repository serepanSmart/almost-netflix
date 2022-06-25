import styled from 'styled-components';
import { Option } from '@/UI';
import { Colors } from '@/UI';
import { checkUrlRegExp } from '@/constants';

export const ErrorMsg = styled.div`
  margin-top: 2px;
  color: ${Colors.Scarlet};
`;

export const regex = new RegExp(checkUrlRegExp);

export const defaultOptions: Option[] = [
  { value: 'Crime', label: 'Crime' },
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Music', label: 'Music' },
  { value: 'Adventure', label: 'Adventure' },
];