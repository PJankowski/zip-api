var config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  mongoUri: process.env.mongoUri
};

module.exports = config;
