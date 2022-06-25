import React from 'react';

export const EXTERNAL_LINK: React.FC = () => (
  <a href="https://www.netflix.com/" target="_blank">
    <b>netflix</b>roulette
  </a>
);

export const URL = 'http://localhost:4000/movies';

export const imgPlaceholder =
  'https://sd.keepcalms.com/i/sorry-no-picture-available.png';

export const checkUrlRegExp =
  // eslint-disable-next-line max-len
  '^(http://www.|https://www.|http://|https://)[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$';
