const Production = 'production';
const Development = 'development';
const Test = 'test';

/**
 * @param {Production | Development | Test} env Env string to match
 * @returns {boolean} eval of process.env.NODE_ENV === env
 */
const _isEnvironment = (env) => process.env.NODE_ENV === env;

/**
 * @returns {boolean} eval of process.env.NODE_ENV === 'production'
 */
const isProduction = () => _isEnvironment(Production);

/**
 * @returns {boolean} eval of process.env.NODE_ENV === 'production'
 */
const isDevelopment = () => _isEnvironment(Development);

/**
 * @returns {boolean} eval of process.env.NODE_ENV === 'test'
 */
const isTest = () => _isEnvironment(Test);

/**
 * Set current process.env.NODE_ENV
 * @param {Production | Development | Test} env Env string to set
 * @returns {string} current value of process.env.NODE_ENV
 */
const _setEnvironment = (env) => process.env.NODE_ENV = env;

/**
 * @param {*} param parameter to compare
 * @returns {boolean} eval of param ==== 'undefined'
 */
const _isUndefined = (param) => typeof param === 'undefined';
/**
 * Set current process.env.NODE_ENV === 'development'
 * @param {function} callback Callback Function
 * @returns {string | function} current value of process.env.NODE_ENV | callback
 */
const setDevelopmentEnvironment = (callback) => {
  let env = _setEnvironment(Development);
  if(_isUndefined(callback)) {
    return env;
  }
  return callback();
};

/**
 * Set current process.env.NODE_ENV === 'production'
 * @param {function} callback Callback Function
 * @returns {string | function} current value of process.env.NODE_ENV | callback
 */
const setProductionEnvironment = (callback) => {
  let env = _setEnvironment(Production);
  if(_isUndefined(callback)) {
    return env;
  }
  return callback();
};

/**
 * Set current process.env.NODE_ENV === 'test'
 * @param {function} callback Callback Function
 * @returns {string | function} current value of process.env.NODE_ENV | callback
 */
const setTestEnvironment = (callback) => {
  let env = _setEnvironment(Test);
  if(_isUndefined(callback)) {
    return env;
  }
  return callback();
};

exports.isDevelopment = isDevelopment;
exports.isProduction = isProduction;
exports.isTest = isTest;
exports.setDevelopmentEnvironment = setDevelopmentEnvironment;
exports.setProductionEnvironment = setProductionEnvironment;
exports.setTestEnvironment = setTestEnvironment;
