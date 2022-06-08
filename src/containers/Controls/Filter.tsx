import React from 'react';
import { FiltersList } from './styles';
import { TabButton, ITab } from '@/UI';

interface IFiltersProps {
  filters: ITab[];
  onClick: (e: ITab) => void;
}

const Filters: React.FC<IFiltersProps> = ({ filters, onClick }) => {

  return (
    <FiltersList>
      {filters.map((filter) => (
        <TabButton
          key={filter.id}
          active={filter.active}
          onClick={() => onClick(filter)}
          value={filter.value}
        >
          {filter.value}
        </TabButton>
      ))}
    </FiltersList>
  );
};

export default React.memo(Filters);