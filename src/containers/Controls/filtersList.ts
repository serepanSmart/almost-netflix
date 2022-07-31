export interface IFilterProps {
  id: string;
  value: string;
  title: string;
}

const filters: IFilterProps[] = [
  {
    id: 'tab1',
    value: '',
    title: 'All',
  },
  {
    id: 'tab2',
    value: 'Documentary',
    title: 'Documentary',
  },
  {
    id: 'tab3',
    value: 'Comedy',
    title: 'Comedy',
  },
  {
    id: 'tab4',
    value: 'Horror',
    title: 'Horror',
  },
  {
    id: 'tab5',
    value: 'Crime',
    title: 'Crime',
  },
];

export default filters;