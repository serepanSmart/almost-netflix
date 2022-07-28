import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ThreeDotsVertical } from '@styled-icons/bootstrap';
import { Card, Caption, Actions } from './styles';
import { Button, Select, Option, OptionWithoutCheckbox } from '@/UI';
import { IMovie } from '@/service';
import { OnChangeValue } from 'react-select';
import { useModalContext } from '@/context';
import { imgPlaceholder } from '@/utils';
import { useRouter } from 'next/router';

const defaultOptions: Option[] = [
  { value: 'edit', label: 'edit' },
  { value: 'delete', label: 'delete' },
];

const MovieCard: React.FC<IMovie> = ({ card }) => {
  const [src, setSrc] = useState(card.poster_path);
  const [isActionsOpened, setActionsOpened] = useState<boolean>(false);

  const { openModalHandler } = useModalContext();

  const { id } = card;

  const router = useRouter();

  const stopBubbling = (e: React.MouseEvent<HTMLDivElement>): void => {
    // HMM, SOMETHNIG STRANGE HAPPENS HERE, HACK FOR PREVENTING LINK BEHAVIOUR
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
  };

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

  return (
    <Card md={4}>
      <Link
        href={{
          pathname: '/movies/[id]',
          query: { ...router.query, id },
        }}
        as={`/movies/${id}`}
      >
        <a>
          <Image
            src={src}
            alt={card.title}
            onError={() => setSrc(imgPlaceholder)}
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={imgPlaceholder}
          />
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
            <h3>{card.title}</h3>
            <span>
              {card.release_date?.split('-')[0] ||
                'No info about release date yet'}
            </span>
          </Caption>
          <p>{card.genres?.join(', ') || 'Genres list will be set soon'}</p>
        </a>
      </Link>
    </Card>
  );
};

export default MovieCard;
