const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
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
      'thumbs.gfycat.com',
      'localhost',
    ],
    loader: 'default',
  },
});
