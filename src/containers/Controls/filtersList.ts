import { ITab } from '@/UI';

const filters: ITab[] = [
  {
    id: 'All',
    title: 'All',
    value: 'All',
    active: true,
    disabled: false,
  },
  {
    id: 'Documentary',
    title: 'Documentary',
    value: 'Documentary',
    active: false,
    disabled: false,
  },
  {
    id: 'Comedy',
    title: 'Comedy',
    value: 'Comedy',
    active: false,
    disabled: false,
  },
  {
    id: 'Horror',
    title: 'Horror',
    value: 'Horror',
    active: false,
    disabled: false,
  },
  {
    id: 'Crime',
    title: 'Crime',
    value: 'Crime',
    active: false,
    disabled: false,
  },
];

export default filters;