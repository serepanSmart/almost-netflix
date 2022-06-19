import React, { useState, useCallback } from 'react';
import { Card, Caption, Actions } from './styles';
import { Button, Select, Option, OptionWithoutCheckbox } from '@/UI';
import { IMovie } from '@/service';
import { OnChangeValue } from 'react-select';
import { X, ThreeDotsVertical } from '@styled-icons/bootstrap';
import { addDefaultSrc } from '@/utils';
import { useMoviesContext } from '@/context';

const defaultOptions: Option[] = [
  { value: 'edit', label: 'edit' },
  { value: 'delete', label: 'delete' },
];

const MovieCard: React.FC<IMovie> = ({
  title,
  genres,
  posterPath,
  releaseDate,
  card,
}) => {
  const [isActionsOpened, setActionsOpened] = useState<boolean>(false);

  const { handleShowMovie } = useMoviesContext();

  const stopBubbling =
  (e: React.MouseEvent<HTMLDivElement>): void => e.stopPropagation();

  const handleOpenDropdown = useCallback(() => {
    setActionsOpened(!isActionsOpened);
  }, [isActionsOpened]);

  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);

  const handleChangeOption = useCallback((
    newValue: OnChangeValue<Option, false>
  ) => {
    setSelectedOption(newValue as Option);
    setActionsOpened(!isActionsOpened);
  }, [isActionsOpened]);

  const handleClick = (): void => handleShowMovie(card);

  return (
    <Card
      md={4}
      onClick={handleClick}
    >
      <img
        src={posterPath}
        alt={title}
        onError={addDefaultSrc}
      />
      <Actions
        onClick={stopBubbling}
      >
        <Button
          icon
          onClick={handleOpenDropdown}
        >
          {isActionsOpened ? <X /> : <ThreeDotsVertical />}
        </Button>
        {
          isActionsOpened && (
            <Select
              value={selectedOption}
              onChange={handleChangeOption}
              selectedOption={selectedOption}
              options={defaultOptions}
              closeMenuOnSelect={true}
              menuIsOpen={true}
              inCard
              components={OptionWithoutCheckbox}
            />
          )
        }
      </Actions>
      <Caption>
        <h3>{title}</h3>
        <span>{releaseDate}</span>
      </Caption>
      <p>{genres.join(', ')}</p>
    </Card>
  );
};

export default MovieCard;
