export function sortByField<T>(field: T) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}