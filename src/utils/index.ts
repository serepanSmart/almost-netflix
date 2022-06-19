export function sortByField<T>(field: T) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

// eslint-disable-next-line max-len
const imgPlaceholder = 'https://sd.keepcalms.com/i/sorry-no-picture-available.png';

export const addDefaultSrc = (e: React.ChangeEvent<HTMLImageElement>): void => {
  e.target.src = imgPlaceholder;
};