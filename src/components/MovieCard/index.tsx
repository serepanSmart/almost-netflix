import React, { useState, useCallback } from 'react';
import { Card, Caption, Actions } from './styles';
import { Button, Select, Option, OptionWithoutCheckbox } from '@/UI';
import { X, ThreeDotsVertical } from '@styled-icons/bootstrap';
import { IMovie } from '@/service/movies';
import { useMoviesContext } from '@/context';
import { OnChangeValue } from 'react-select';

export interface ICard {
  title: string;
  genre: string;
  src: string;
  year: string | number;
  onCLick?: (data: IMovie) => void;
  card: IMovie;
}

const defaultOptions: Option[] = [
  { value: 'edit', label: 'edit' },
  { value: 'delete', label: 'delete' },
];

const MovieCard: React.FC<ICard> = ({ title, genre, src, year, card }) => {
  const [isActionsOpened, setActionsOpened] = useState<boolean>(false);

  const { handleShowMovie } = useMoviesContext();

  const handleOpenDropdown = useCallback(() => {
    setActionsOpened(!isActionsOpened);
  }, [isActionsOpened]);

  const [selectedOption, setSelectedOption] = useState(() => {
    const option = defaultOptions[0];
    if (!option) {
      throw new Error('empty options list');
    }
    return option;
  });

  const handleChangeOption = useCallback(
    (newValue: OnChangeValue<Option, false>) => {
      setSelectedOption(newValue as Option);
      setActionsOpened(!isActionsOpened);
    },
    [isActionsOpened],
  );

  const preventPropagation =
  (e: React.MouseEvent<HTMLDivElement>): void => e.stopPropagation();

  const handleClick = (): void => handleShowMovie(card);

  return (
    <Card md={4} onClick={handleClick}>
      <img src={src} alt={title} />
      <Actions onClick={preventPropagation}>
        <Button icon onClick={handleOpenDropdown}>
          {isActionsOpened ? <X /> : <ThreeDotsVertical />}
        </Button>
        {isActionsOpened && (
          <Select
            value={selectedOption}
            onChange={handleChangeOption}
            selectedOption={selectedOption}
            options={defaultOptions}
            closeMenuOnSelect
            menuIsOpen
            inCard
            components={OptionWithoutCheckbox}
          />
        )}
      </Actions>
      <Caption>
        <h3>{title}</h3>
        <span>{year}</span>
      </Caption>
      <p>{genre}</p>
    </Card>
  );
};

export default React.memo(MovieCard);
