import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
