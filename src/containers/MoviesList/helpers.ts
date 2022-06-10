import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITab, Option } from '@/UI';
import { RootState } from '@/redux/rootReducer';
import { fetchMovies } from '@/redux/actions';
import { OnChangeValue } from 'react-select';
import filters from '@/containers/Controls/filtersList';
import { IAlert } from '@/UI/Alert';

export const defaultOptions: Option[] = [
  { value: 'release_date', label: 'Release Date' },
  { value: 'genre', label: 'Genre' },
];

export const DATE_SORTING= `?sortBy=${defaultOptions[0]?.value}&sortOrder=asc`;

interface IHandleMovies {
  filtersList: ITab[];
  selectedOption: Option | Option[];
  loading: boolean;
  alert: IAlert;
  handleChangeOption: (newValue: OnChangeValue<Option, false>) => void;
  handleSelectGenre: (e: ITab) => void;
}

export const useHandleMovie = (): IHandleMovies => {
  const [filtersList, setFilterslist] = useState<ITab[]>(filters);
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);

  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

  const alert = useSelector((state: RootState) => {
    return state.app.alert;
  });

  // FUNCTION TO CHANGE ACTIVE TAB STATE
  const selectActiveTabHandler = (value: string): void =>
    setFilterslist((prev) => {
      prev.find((tab) => tab.active).active = false;
      prev.find((tab) => tab.value === value).active = true;
      return [...prev];
    });

  // SORT HANDLER FOR SELECT
  const handleChangeOption = useCallback(
    (newValue: OnChangeValue<Option, false>) => {
      setSelectedOption(newValue as Option);
      const sortParameter = newValue.value;
      dispatch(fetchMovies(`?sortBy=${sortParameter}&sortOrder=asc`));
      selectActiveTabHandler('All');
    },
    [dispatch],
  );

  // GENRE FILTER TABS
  const handleSelectGenre = useCallback(
    (e: ITab) => {
      if (e.value === 'All') {
        selectActiveTabHandler('All');
        dispatch(fetchMovies(DATE_SORTING));
      } else {
        selectActiveTabHandler(e.value);
        dispatch(fetchMovies(`?filter=${e.value}`));
      }
    },
    [dispatch],
  );

  return {
    filtersList,
    selectedOption,
    loading,
    alert,
    handleChangeOption,
    handleSelectGenre,
  };
};