import Colors from '../Theme/Colors';

const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
  }),
  placeholder: (provided) => ({
    ...provided,
    marginLeft: 0,
    paddingLeft: 10,
  }),
  option: (provided) => ({
    ...provided,
    color: Colors.White,
    padding: 10,
    background: Colors.Grey,
    width: '100%',
    cursor: 'pointer',
    '&:first-of-type': {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    '&:last-of-type': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    '&:hover': {
      background: Colors.Scarlet
    }
  }),
  control: () => ({
    minWidth: 200,
    width: '100%',
    minHeight: 45,
    display: 'flex',
    background: Colors.TidaOpacity,
    borderRadius: 4,
    cursor: 'pointer',
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '100%',
    color: state.selectProps.menuColor,
    padding: 0,
    background: 'transparent',
  }),
  singleValue: (provided) => ({
    ...provided,
    marginLeft: 0,
    paddingLeft: 10,
    color: Colors.White,
    background: 'transparent',
    width: 200,
    cursor: 'pointer'
  }),
  multiValue: (provided) => ({
    ...provided,
    color: Colors.White,
    background: Colors.Scarlet,
    '>*:first-of-type': {
      color: Colors.White
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  }),
};

export default customStyles;