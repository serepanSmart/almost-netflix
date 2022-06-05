import Colors from '../Theme/Colors';
import styled, { keyframes, css } from 'styled-components';
import Select from 'react-select';

const expand = keyframes`
  0% {transform: scaleY(0)}
  100% {transform: scaleY(1.0)}
`;

const StyledSelect = styled(Select) <{ inCard?: boolean }>`
  .Select__control {
    min-height: 45px;
    width: 100%;
    min-width: 200px;
    border-radius: 4px;
    border: none;
    border-color: transparent;
    cursor: pointer;
    display: flex;
    background: ${Colors.TidaOpacity};
  }

  .Select__dropdown-indicator {
      transition: 300ms;
    }

  .Select__control--is-focused {
    outline: transparent;
    box-shadow: 0 0 1px 1px ${Colors.ScarletHover};
  }
  .Select__control--menu-is-open {
    .Select__dropdown-indicator {
     transform: rotate(180deg);
   }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: ${Colors.White};
    width: 100%;
    padding: 0;
    background: transparent;
    transform: scaleY(0);
    animation-name: ${expand};
    animation-fill-mode: forwards;
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.07, 0.9, 0.32, 1.28);
    transform-origin: top;
  }

  .Select__menu-list {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  .Select__single-value {
    color: ${Colors.White};
  }
  .Select__multi-value {
    color: ${Colors.White};
    background: ${Colors.Scarlet};
    >*:first-of-type {
      color: ${Colors.White};
    };
  };
  .Select__option {
    color: ${Colors.White};
    padding: 10px;
    background: ${Colors.Grey};
    width: 100%;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    &:first-of-type {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    &:last-of-type {
      border-bottom-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:hover {
      background: ${Colors.Scarlet};
    }
  }
  ${({ inCard }) => inCard && css`
    .Select__control {
      visibility: hidden;
    }
    .Select__menu {
      top: calc(-100% + 2px);
      right: 36px;
    }
    .Select__option {
      background-color: ${Colors.Tuna};
    }
  `}
`;

export default StyledSelect;
