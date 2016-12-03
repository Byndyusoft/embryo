import config from './config.json';

/* eslint-disable no-undef, import/no-dynamic-require */
const modifier = require(`./${PROJECT_ENV}.json`);
/* eslint-enable no-undef, import/no-dynamic-require */

export default { ...config, ...modifier };
