import React, { useState, useCallback } from 'react';
import { Card, Caption, Actions } from './styles';
import { Button, Select, Option, OptionWithoutCheckbox } from '@/UI';
import { IMovie } from '@/service';
import { OnChangeValue } from 'react-select';
import { X, ThreeDotsVertical } from '@styled-icons/bootstrap';
import { addDefaultSrc } from '@/utils';
import { useMoviesContext, useModalContext } from '@/context';

const defaultOptions: Option[] = [
  { value: 'edit', label: 'edit' },
  { value: 'delete', label: 'delete' },
];

const MovieCard: React.FC<IMovie> = ({
  title,
  genres,
  poster_path,
  release_date,
  card,
}) => {

  const [isActionsOpened, setActionsOpened] = useState<boolean>(false);
  const { openModalHandler } = useModalContext();
  const { handleShowMovie  } = useMoviesContext();

  const stopBubbling =
  (e: React.MouseEvent<HTMLDivElement>): void => e.stopPropagation();

  const openDropdownHandler = useCallback(() => {
    setActionsOpened(!isActionsOpened);
  }, [isActionsOpened]);

  const handleChangeOption = useCallback(
    (newValue: OnChangeValue<Option, false>) => {
      const modalTitle = `${newValue.label.toUpperCase()} movie`;
      if (newValue.label === 'delete') {
        openModalHandler(modalTitle, 'DELETE', card, true);
      } else {
        openModalHandler(modalTitle, 'PUT', card, false);
      }
      setActionsOpened(!isActionsOpened);
    },
    [isActionsOpened, openModalHandler, card],
  );

  const handleClick = (): void => handleShowMovie(card);

  return (
    <Card md={4} onClick={handleClick}>
      <img src={poster_path} alt={title} onError={addDefaultSrc} />
      <Actions onClick={stopBubbling}>
        <Button icon onClick={openDropdownHandler}>
          {isActionsOpened ? <X /> : <ThreeDotsVertical />}
        </Button>
        {isActionsOpened && (
          <Select
            onChange={handleChangeOption}
            options={defaultOptions}
            closeMenuOnSelect={true}
            menuIsOpen={true}
            inCard
            components={OptionWithoutCheckbox}
            value={null}
          />
        )}
      </Actions>
      <Caption>
        <h3>{title}</h3>
        <span>
          {release_date?.split('-')[0] || 'No info about release date yet'}
        </span>
      </Caption>
      <p>{genres?.join(', ') || 'Genres list will be set soon'}</p>
    </Card>
  );
};

export default MovieCard;
