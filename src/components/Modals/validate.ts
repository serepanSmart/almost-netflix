import { Option } from '@/UI';
import { regex } from './helpers';

interface IValidateProps {
  validateInputValue: (value: string | number) => string | number;
  validateUrlValue: (value: string) => string;
  validateGenres: (value: Option[]) => string;
}

const useValidateFields = (): IValidateProps => {

  const validateInputValue = (value: string): string => {
    let error: string | undefined;
    if (!value || typeof value === 'string' && value.trim().length < 1) {
      error = 'This field is required';
    } else if (typeof value === 'number' && +value < 1) {
      error = 'Value should be bigger than 0';
    }
    return error;
  };

  const validateUrlValue = (value: string): string | undefined => {
    let error: string | undefined;
    if (!value) {
      error = 'This field is required';
    } else if (!regex.test(value)) {
      error = 'Please fill in correct URL address';
    }
    return error;
  };

  const validateGenres = (value: Option[]): string | undefined => {
    let error: string | undefined;
    if (!value?.length) {
      error = 'Please select genres';
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
