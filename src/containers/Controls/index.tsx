import Filter from './Filter';
import Sort from './Sort';
import { ControlsRow } from '@/containers//Controls/styles';
import { OnChangeValue } from 'react-select';
import { Option } from '@/UI';
import { IFilterProps } from './filtersList';

interface IControlsprops {
  filters: IFilterProps[];
  value: Option | Option[];
  options: Option[];
  selectedOption: Option | Option[];
  onChange: (newValue: OnChangeValue<Option, false>) => void;
}

const Controls: React.FC<IControlsprops> = ({
  filters,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <ControlsRow>
      <Filter filters={filters} />
      <Sort
        value={selectedOption}
        onChange={onChange}
        selectedOption={selectedOption}
        options={options}
      />
    </ControlsRow>
  );
};

export default Controls;
