import React from 'react';
import { Select, ISelect, Label } from '@/UI';

const Sort: React.FC<ISelect> = ({ options, onChange }) => {
  return (
    <Label type="inline-checkbox">
      <span>SORT BY</span>
      <Select
        options={options}
        onChange={onChange}
      />
    </Label>
  );
};

export default Sort;