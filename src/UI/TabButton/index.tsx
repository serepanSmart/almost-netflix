import React, { useCallback, PropsWithChildren } from 'react';
import { FilterItem } from './styles';

export interface ITab {
  active: boolean;
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  id?: string;
}

const TabButton: React.FC<PropsWithChildren<ITab>> = ({
  active,
  onClick,
  disabled,
  value,
  id = value,
}) => {
  const handleClick = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>): void => {
      if (onClick) {
        onClick(evt);
      }
    },
    [onClick],
  );

  return (
    <FilterItem
      active={active}
      disabled={disabled}
      onClick={handleClick}
      value={value}
      type="button"
      id={id} // id here is value by default, but it can be changed
    >
      {value}
    </FilterItem>
  );
};

export default TabButton;
