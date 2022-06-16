import React, {
  FunctionComponent,
  useCallback,
  useState,
  useMemo,
} from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import moment from 'moment';
import Input from '../Input';
import { DatePickerStyles } from './DatePickerStyles';

const DATE_FORMAT = 'dd.MM.yyyy';
const KEY_DATE_FORMAT = 'DD.MM.YYYY';
const KEY_ENTER = 'ENTER';

const getDateTime = (
  value: string,
  dateFormat: string | string[] | undefined,
  startOfDay: boolean | undefined,
): Date | null => {
  if (!value) {
    return null;
  }
  return startOfDay
    ? moment(value, dateFormat).startOf('day').utc().toDate()
    : moment(value, dateFormat).endOf('day').utc().toDate();
};

interface DatePickerProps extends ReactDatePickerProps {
  placeholder?: string;
  startOfDay?: boolean;
  timeFormat?: string;
}

const DatePicker: FunctionComponent<DatePickerProps> = ({
  selected = null,
  dateFormat = DATE_FORMAT,
  placeholder = '',
  value,
  onChange,
  startOfDay = false,
  timeFormat,
  onBlur,
  onKeyDown,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const parseInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [],
  );

  const selectedDate = useMemo(() => {
    if (!value) return selected;
    const date = moment(value, dateFormat);
    if (date.isValid()) {
      return getDateTime(value, dateFormat, startOfDay);
    }
    return selected;
  }, [value, selected, dateFormat, startOfDay]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (onKeyDown) {
      onKeyDown(e);
    } else if (e.key === KEY_ENTER) {
      setInputValue('');
      if (!inputValue.length) {
        onChange(null, e);
      } else {
        const date = moment(inputValue, timeFormat || KEY_DATE_FORMAT);
        onChange(date.isValid() ? date.toDate() : selectedDate, e);
      }
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const date = moment(e.target.value, timeFormat || KEY_DATE_FORMAT);

    if (date.isValid()) {
      onBlur?.(e);
      onChange(date.toDate(), e);
    }
  };

  return (
    <div>
      <DatePickerStyles />
      <ReactDatePicker
        customInput={<Input />}
        onChange={onChange}
        placeholderText={placeholder}
        value={moment.isMoment(value) ? value.format(DATE_FORMAT) : value}
        onChangeRaw={parseInput}
        onKeyDown={handleKeyDown}
        timeFormat={timeFormat}
        dateFormat={dateFormat}
        selected={selectedDate}
        onBlur={handleOnBlur}
        {...props}
      />
    </div>
  );
};

export default DatePicker;
