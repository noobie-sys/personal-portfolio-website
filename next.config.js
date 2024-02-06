// next.config.js

module.exports = {
    // other configurations...
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Adjust the ignore pattern as needed
        config.resolve.alias['micromatch'] = require.resolve('micromatch');
      }
  
      return config;
    },
  };
  