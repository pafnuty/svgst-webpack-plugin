/**
 * [config description]
 * @type {Object}
 */
const _configs = {
  platform: require(__dirname + '/platform/global')
};

/**
 * Load webpack config via enviroments
 * @return {[type]}            [description]
 * @param environment
 */
const _load = function (environment) {
  // check enviroment
  if (!environment) {
    throw "Can't find local environment variable via process.env.NODE_ENV";
  }
  if (!_configs[environment]) {
    throw "Can't find enviroments see _configs object";
  }

  // load config file by enviroment
  return _configs[environment](__dirname);
};

/**
 * Export WebPack config
 * @type {[type]}
 */
module.exports = _load(process.env.NODE_ENV);
