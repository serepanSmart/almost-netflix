import Filter from './Filter';
import Sort from './Sort';
import { ControlsRow } from '@/containers//Controls/styles';
import { ITab } from '@/UI';
import { OnChangeValue } from 'react-select';
import { Option } from '@/UI';

interface IControlsprops {
  filters: ITab[];
  onClick: (e: ITab) => void;
  value: Option | Option[];
  options: Option[];
  selectedOption: Option | Option[];
  onChange: (newValue: OnChangeValue<Option, false>) => void;
}

const Controls: React.FC<IControlsprops> = ({
  filters,
  onClick,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <ControlsRow>
      <Filter filters={filters} onClick={onClick} />
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
