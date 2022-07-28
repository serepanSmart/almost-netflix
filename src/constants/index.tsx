export const EXTERNAL_LINK: React.FC = () => (
  <a href="https://www.netflix.com/" target="_blank">
    <b>netflix</b>roulette
  </a>
);

export const API = 'http://localhost:4000/movies';

export const checkUrlRegExp =
  // eslint-disable-next-line max-len
  '^(http://www.|https://www.|http://|https://)[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$';

export const rootPath = 'search/';
