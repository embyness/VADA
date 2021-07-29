
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['icswXejsx2auswSa1so6Be'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  