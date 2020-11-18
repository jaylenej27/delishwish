const extractHerokuDatabaseEnvVars = require('./utils/extractHerokuDatabaseEnvVars');

extractHerokuDatabaseEnvVars();

const options = {};

if (process.env.NODE_ENV === 'production') {
  options.ssl = { rejectUnauthorized: false };
}

module.exports = options;