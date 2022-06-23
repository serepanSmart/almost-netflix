import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, Input, BarsLoader } from '@/UI';
import { CenteredRow } from './styles';
import { EXTERNAL_LINK } from '@/constants';
import { useModalContext } from '@/context';
import { RootState } from '@/redux/rootReducer';

const BannerContainer: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

  const { openModalHandler } = useModalContext();

  const changeInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): string => {
      setValue(e.currentTarget.value);
      return value;
    },
    [value],
  );

  const addMovieModalHandler = (): void => openModalHandler('Add Movie');

  const setConcole = (): void => {
    console.log('Hello');
  };

  return (
    <>
      <CenteredRow>
        <EXTERNAL_LINK />
        <Button
          type="button"
          value="+ Add Movie"
          onClick={addMovieModalHandler}
          theme="light"
        />
      </CenteredRow>
      <h1>FIND YOUR MOVIE</h1>
      <CenteredRow>
        <Input
          value={value}
          onChange={changeInputHandler}
          placeholder="What do you want to watch?"
          margin="right"
        />
        <Button
          type="button"
          value={loading ? null : 'Search'}
          onClick={setConcole}
        >
          {loading && <BarsLoader />}
        </Button>
      </CenteredRow>
    </>
  );
};

export default BannerContainer;
