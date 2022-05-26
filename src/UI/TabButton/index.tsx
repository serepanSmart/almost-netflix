import React, { useCallback, PropsWithChildren } from 'react';
import { FilterItem } from './styles';

export interface ITab {
  active: boolean;
  title: string;
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  id?: string;
}

const TabButton: React.FC<PropsWithChildren<ITab>> =
({ active, title, onClick, disabled }) => {
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
      value={title}
      type="button">
      {title}
    </FilterItem>
  );
};

export default TabButton;
