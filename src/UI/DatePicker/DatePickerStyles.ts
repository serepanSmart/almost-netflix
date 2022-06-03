import { createGlobalStyle } from 'styled-components';
import Colors from '../Theme/Colors';

export const DatePickerStyles = createGlobalStyle`
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    margin-left: -8px;
    position: absolute;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    /*box-sizing: content-box;*/
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
  }

  .react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
    top: 0;
    margin-top: -8px;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: #f0f0f0;
  }

  .react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    bottom: 0;
    margin-bottom: -8px;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom: none;
    border-top-color: #fff;
  }

  .react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    bottom: -1px;
    border-top-color: #aeaeae;
  }

  .react-datepicker-wrapper {
    display: block;
    position: relative;
    width: 100%;
  }

  .react-datepicker {
    color: ${Colors.White};
    position: relative;
    background: ${Colors.ScarletHover};
    border: none;
    border-radius: 4px;
    font-size: 13px;
    display: inline-flex;
    overflow: hidden;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: 35px;
  }

  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }

  .react-datepicker--time-only .react-datepicker__time {
    height: auto;
  }

  .react-datepicker--time-only .react-datepicker__time-box {

  }

  .react-datepicker__triangle {
    position: absolute;
    left: 50px;
  }

  .react-datepicker-popper {
    z-index: 1000;
    border-radius: 4px;
  }

  .react-datepicker-popper[data-placement^="bottom"] {
    margin-top: 10px;
  }

  .react-datepicker-popper[data-placement^="top"] {
    margin-bottom: 10px;
  }

  .react-datepicker-popper[data-placement^="right"] {
    margin-left: 8px;
  }

  .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
    left: auto;
    right: 42px;
  }

  .react-datepicker-popper[data-placement^="left"] {
    margin-right: 8px;
  }

  .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
    left: 42px;
    right: auto;
  }

  .react-datepicker__header {
    text-align: center;
    background: ${Colors.TidaOpacity};
    position: relative;
    border: none;
    border-radius: 0;
    padding: 0;
  }

  .react-datepicker__header--time {
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Colors.TidaOpacity};
    border-color: green;
    position: relative;
    z-index: 1;
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header {
    border-bottom: 1px solid ${Colors.White};
    font-weight: 500;
    font-size: 14px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-datepicker__navigation {
    background: none;
    cursor: pointer;
    position: absolute;
    padding: 0;
    z-index: 1;
    overflow: hidden;
    outline: none;
    width: 24px;
    height: 24px;
    background: ${Colors.Scarlet};
    top: 14px;
    border: none;
    border-radius: 4px;

    &-icon {
      display: none;
    }

    &::before {
      content: '>';
      color: ${Colors.White};
      font-weight: bold;
    }
  }

  .react-datepicker__portal .react-datepicker__navigation--next {
    right: 14px;
  }

  .react-datepicker__navigation--previous {
    left: 14px;
    transform: rotateY(180deg);
  }

  .react-datepicker__navigation--next {
    right: 14px;
  }

  .react-datepicker__navigation--previous--disabled,
  .react-datepicker__navigation--previous--disabled:hover,
  .react-datepicker__navigation--next--disabled,
  .react-datepicker__navigation--next--disabled:hover {
    opacity: .4;
    cursor: default;
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }

  .react-datepicker__navigation--next--disabled,
  .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__month {
    text-align: center;
    border-top: 1px solid ${Colors.White};
    background: ${Colors.TidaOpacity};
    margin: 0 0 3px;
  }

  .react-datepicker__time-container {
    width: auto;
    display: flex;
    flex-direction: column;
    border-left: 1px solid ${Colors.White};
    overflow: hidden;
    background: ${Colors.TidaOpacity};
    z-index: 1;
  }

  .react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--selected {
    color: ${Colors.White};
    background: ${Colors.Scarlet};
    font-weight: 400;
  }

  .react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--selected:hover {
    background: ${Colors.ScarletHover};
    font-weight: 400;
  }

  .react-datepicker__week-number {
    width: 34px;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.Scarlet};
    font-weight: 500;
    opacity: .7;
    margin: 2px 3px;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day-names {
    background: rgba(234,234,234,0.30);
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    display: inline-flex;
    width: 34px;
    height: 32px;
    justify-content: center;
    align-items: center;
    margin: 2px;
    outline: none;
  }

  .react-datepicker__day-name {
    font-size: 12px;
    font-weight: 500;
    color: ${Colors.White};
  }

  .react-datepicker__day {
    cursor: pointer;
    border-radius: 4px;
    :hover {
      border-radius: 4px;
    }
  }

  .react-datepicker__day:hover {
    background: ${Colors.Scarlet};
  }

  .react-datepicker__day--outside-month:not(.react-datepicker__day--selected) {
    color: ${Colors.White};
    opacity: .3;
  }

  .react-datepicker__day--outside-month.react-datepicker__day--selected {
    color: #fff;
  }

  .react-datepicker__day--today {
    font-weight: bold;
  }

  .react-datepicker__day--highlighted {
    border-radius: 0.3rem;
    background-color: #3dcc4a;
    color: ${Colors.White};
  }

  .react-datepicker__day--highlighted-custom-2 {
    color: ${Colors.White};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: ${Colors.Scarlet};
    color: ${Colors.White};
    box-shadow: 0px 5px 10px rgba(95,12, 13, 46%);
  }

  .react-datepicker__day--in-range:not(.react-datepicker__day--selected) {
    background: ${Colors.ScarletFocus};
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover {
    background-color: ${Colors.Scarlet};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${Colors.Scarlet};
    color: ${Colors.White};
    box-shadow: 0px 5px 10px rgba(242, 153, 74, 0.35);
  }

  .react-datepicker__month--selecting-range
  .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: #f0f0f0;
    color: ${Colors.Tuna};
  }

  .react-datepicker__day--disabled {
    cursor: default;
    color: ${Colors.Tuna};
    opacity: .1;
  }

  .react-datepicker__day--disabled:hover {
    background-color: transparent;
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
  }

  .react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.TidaOpacity};
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647;
  }
`;