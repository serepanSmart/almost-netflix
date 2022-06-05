import React, { ReactElement } from 'react';
import styled from 'styled-components';
import StyledSelect from './styles';
import { components, GroupBase, OnChangeValue } from 'react-select';
import { CaretDownFill } from '@styled-icons/bootstrap';
import Colors from '../Theme/Colors';
import Checkbox from '../Checkbox';
import Label from '../Label';
import {
  SelectComponents
} from 'react-select/dist/declarations/src/components';

export type Option = {
  value?: string;
  label?: string;
};

// eslint-disable-next-line no-redeclare
const Option = (props): ReactElement => {
  return (
    <components.Option {...props}>
      <Label type="inline-checkbox">
        <Checkbox checked={props.isSelected} onChange={() => null} />
        {props.label}
      </Label>
    </components.Option>
  );
};

export const OptionWithoutCheckbox: unknown = ( props: any) => { //  https://react-select.com/upgrade, from v4 to v5, OptionTypeBase no replacement, there's no longer a base type for options
  return (
    <components.Option {...props}>
      <Label type="inline-checkbox">{props.label}</Label>
    </components.Option>
  );
};

export interface ISelect {
  options: Option[];
  onChange:
  (value: OnChangeValue<Option, false>) => void;
  value: Option | Option[];
  placeholder?: string;
  selectedOption?: Option | Option[];
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
  components?:
  Partial<SelectComponents<typeof Option, boolean, GroupBase<typeof Option>>>;
  menuIsOpen?: boolean;
  inCard?: boolean;
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
  closeMenuOnSelect = true,
  value,
  menuIsOpen,
  inCard = false,
  components = { DropdownIndicator, Option },
}) => (
  <StyledSelect
    components={components}
    classNamePrefix="Select"
    options={options}
    onChange={onChange}
    closeMenuOnSelect={closeMenuOnSelect}
    isMulti={isMulti}
    value={value}
    menuIsOpen={menuIsOpen}
    inCard={inCard}
  />
);

export default SelectComponent;
