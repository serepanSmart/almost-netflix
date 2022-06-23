import { Option } from '@/UI';
import { regex } from './helpers';

interface IValidateProps {
  validateInputValue: (value: string | number) => string | number;
  validateUrlValue: (value: string) => string;
  validateGenres: (value: Option[]) => string;
}

const useValidateFields = (): IValidateProps => {

  const validateInputValue = (value: string | number): string | number => {
    let error: string | number | undefined;
    if (!value) {
      error = 'This field is required';
    } else if (value < 1) {
      error = 'Value should be bigger than 0';
    }
    return error;
  };

  const validateUrlValue = (value: string): string => {
    let error: string | undefined;
    if (!value) {
      error = 'This field is required';
    } else if (!regex.test(value)) {
      error = 'Please fill in correct URL address';
    }
    return error;
  };

  const validateGenres = (value: Option[]): string => {
    let error: string | undefined;
    if (!value?.length) {
      error = 'This field is required';
    }
    return error;
  };
  return {
    validateInputValue,
    validateUrlValue,
    validateGenres,
  };
};

export default useValidateFields;
