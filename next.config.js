module.exports = {
  basePath: '/search',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        basePath: false,
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      'image.tmdb.org',
      'sd.keepcalms.com',
      'mypostercollection.com',
      'localhost',
    ],
    loader: 'default',
  },
};
