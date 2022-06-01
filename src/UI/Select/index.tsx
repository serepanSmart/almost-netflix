import React from 'react';
import styled from 'styled-components';
import customStyles from './styles';
import Select, { components, OnChangeValue } from 'react-select';
import { CaretDownFill } from '@styled-icons/bootstrap';
import Colors from '../Theme/Colors';
import Checkbox from '../Checkbox';
import Label from '../Label';

export type Option = {
  value?: string;
  label?: string;
};

// eslint-disable-next-line no-redeclare
const Option = (props): React.ReactElement => {
  return (
    <>
      <components.Option {...props}>
        <Label
          type="inline-checkbox"
        >
          <Checkbox
            checked={props.isSelected}
            onChange={() => null}
          />
          {props.label}
        </Label>
      </components.Option>
    </>
  );
};

export interface ISelect {
  options: Option[];
  onChange:
  (value: OnChangeValue<Option, false>) => void;
  placeholder?: string;
  selectedOption?: Option | Option[];
  isMulti?: boolean;
  allowSelectAll?: boolean;
  value: Option | Option[];
  closeMenuOnSelect?: boolean;
}

const Arrow = styled(CaretDownFill)`
  fill: ${Colors.Scarlet};
`;

const CaretDownIcon = (): React.ReactElement => {
  return <Arrow size={18} color={Colors.Scarlet} />;
};

const DropdownIndicator = (props): React.ReactElement => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectComponent: React.FC<ISelect> = ({
  options,
  onChange,
  isMulti,
  closeMenuOnSelect,
  value
}) => (
  <Select
    styles={customStyles}
    components={{ DropdownIndicator, Option }}
    options={options}
    onChange={onChange}
    closeMenuOnSelect={closeMenuOnSelect}
    isMulti={isMulti}
    value={value}
  />
);

export default SelectComponent;