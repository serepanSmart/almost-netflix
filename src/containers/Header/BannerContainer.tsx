import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from '@/redux/actions';
import { useDispatch } from '@/redux/store';
import { RootState } from '@/redux/rootReducer';
import { Button, Input } from '@/UI';
import { CenteredRow, SearchForm } from './styles';
import { EXTERNAL_LINK, rootPath } from '@/constants';
import { useModalContext } from '@/context/ModalContext';
import { useMoviesContext } from '@/context/MoviesContext';
import { urlConstructor } from '@/context/utils';

const BannerContainer: React.FC = () => {
  const { openModalHandler } = useModalContext();
  const { searchInputValue, handleInputChange, sortValue, filterValue } =
    useMoviesContext();

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const sendSearchRequest = (e: React.FormEvent): void => {
    e.preventDefault();
    if (searchInputValue.trim()) {
      const API = urlConstructor(
        sortValue,
        filterValue,
        undefined,
        searchInputValue,
      );
      dispatch(fetchMovies(API));
      navigate(`${rootPath}/${searchInputValue}${API}`, { replace: true });
    }
    return;
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
