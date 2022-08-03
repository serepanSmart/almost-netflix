import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiltersList } from './styles';
import { IFilterProps } from './filtersList';

const Filters: React.FC<{ filters: IFilterProps[] }> = ({ filters }) => {
  const router = useRouter();
  const { query } = router;

  return (
    <FiltersList>
      {filters.map((filter: IFilterProps) => (
        <Link
          key={filter.id}
          href={{
            pathname: `${query.searchQuery ? query.searchQuery : '/'}`,
            query: { ...query, filter: filter.value },
          }}
        >
          <a
            className={
              query.filter === filter.value ||
              (query.filter === undefined && filter.title === 'All')
                ? 'active'
                : ''
            }
          >
            {filter.title}
          </a>
        </Link>
      ))}
    </FiltersList>
  );
};

export default React.memo(Filters);
