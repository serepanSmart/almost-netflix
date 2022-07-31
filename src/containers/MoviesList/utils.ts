import { useState } from 'react';
import { OnChangeValue } from 'react-select';
import { useRouter } from 'next/router';
import { defaultOptions } from '@/context/utils';
import { Option } from '@/UI';
import { DEFAULT_SORT_ORDER } from '@/constants';

interface IHandleMovies {
  selectedOption: Option | Option[];
  handleChangeOption: (newValue: OnChangeValue<Option, false>) => void;
}

export const useHandleMovie = (): IHandleMovies => {
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);

  const router = useRouter();
  const { query } = router;

  // SORT HANDLER FOR SELECT
  const handleChangeOption =
    (newValue: OnChangeValue<Option, false>): void => {
      setSelectedOption(newValue as Option);
      const sortParameter = newValue.value;
      const newUrl = {
        ...query,
        sortBy: sortParameter,
        sortOrder: DEFAULT_SORT_ORDER,
      };

      for (const key in newUrl) {
        if (newUrl[key] === undefined) {
          delete newUrl[key];
        }
      }

      router.push(`${query.searchQuery
        ? `${query.searchQuery}`
        : ''}?${new URLSearchParams(newUrl).toString()}`);
    };

  return {
    selectedOption,
    handleChangeOption,
  };
};