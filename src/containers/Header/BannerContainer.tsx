import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducer';
import { Button, Input } from '@/UI';
import { CenteredRow, SearchForm } from './styles';
import { EXTERNAL_LINK } from '@/constants';
import { useModalContext } from '@/context/ModalContext';
import { useMoviesContext } from '@/context/MoviesContext';
import { useRouter } from 'next/router';

const BannerContainer: React.FC = () => {
  const { openModalHandler } = useModalContext();
  const { searchInputValue, handleInputChange } = useMoviesContext();

  const router = useRouter();

  const { query } = router;

  const UrlParams = {
    ...query,
    search: searchInputValue,
  };

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

  const sendSearchRequest = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!searchInputValue.trim()) {
      router.push('/');
      return;
    }
    router.push(
      `/${searchInputValue}?${new URLSearchParams(UrlParams).toString()}`,
    );
  };

  const handleOpenModal = (): void => openModalHandler('Add Movie');

  return (
    <>
      <CenteredRow>
        <EXTERNAL_LINK />
        <Button
          type='button'
          value='+ Add Movie'
          onClick={handleOpenModal}
          theme='light'
        />
      </CenteredRow>
      <h1>FIND YOUR MOVIE</h1>
      <CenteredRow>
        <SearchForm
          action=''
          onSubmit={sendSearchRequest}
          data-testid='seacrh-form'
        >
          <Input
            value={searchInputValue || ''}
            onChange={handleInputChange}
            placeholder='Type movie name here...'
            margin='right'
            name='search_movie'
          />
          <Button
            value={loading ? null : 'Search'}
            isLoading={loading}
            onClick={sendSearchRequest}
          />
        </SearchForm>
      </CenteredRow>
    </>
  );
};

export default BannerContainer;
