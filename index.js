const Production = 'production';
const Development = 'development';
const Test = 'test';

/**
 * @param {Production | Development | Test} env Env string to match
 * @returns {boolean} eval of process.env.NODE_ENV === env
 */
const _IsEnvironment = (env) => process.env.NODE_ENV === env;

/**
 * @returns {boolean} eval of process.env.NODE_ENV === 'production'
 */
const IsProduction = () => _IsEnvironment(Production);

/**
 * @returns {boolean} eval of process.env.NODE_ENV === 'production'
 */
const IsDevelopment = () => _IsEnvironment(Development);

/**
 * @returns {boolean} eval of process.env.NODE_ENV === 'test'
 */
const IsTest = () => _IsEnvironment(Test);

/**
 * Set current process.env.NODE_ENV
 * @param {Production | Development | Test} env Env string to set
 * @returns {string} current value of process.env.NODE_ENV
 */
const _SetEnvironment = (env) => process.env.NODE_ENV = env;

/**
 * @param {*} param parameter to compare
 * @returns {boolean} eval of param ==== 'undefined'
 */
const _IsUndefined = (param) => typeof param === 'undefined';
/**
 * Set current process.env.NODE_ENV === 'development'
 * @param {function} callback Callback Function
 * @returns {string | function} current value of process.env.NODE_ENV | callback
 */
const SetDevelopmentEnvironment = (callback) => {
  let env = _SetEnvironment(Development);
  if(_IsUndefined(callback)) {
    return env;
  }
  return callback();
};

/**
 * Set current process.env.NODE_ENV === 'production'
 * @param {function} callback Callback Function
 * @returns {string | function} current value of process.env.NODE_ENV | callback
 */
const SetProductionEnvironment = (callback) => {
  let env = _SetEnvironment(Production);
  if(_IsUndefined(callback)) {
    return env;
  }
  return callback();
};

/**
 * Set current process.env.NODE_ENV === 'test'
 * @param {function} callback Callback Function
 * @returns {string | function} current value of process.env.NODE_ENV | callback
 */
const SetTestEnvironment = (callback) => {
  let env = _SetEnvironment(Test);
  if(_IsUndefined(callback)) {
    return env;
  }
  return callback();
};

exports.IsDevelopment = IsDevelopment;
exports.IsProduction = IsProduction;
exports.IsTest = IsTest;
exports.SetDevelopmentEnvironment = SetDevelopmentEnvironment;
exports.SetProductionEnvironment = SetProductionEnvironment;
exports.SetTestEnvironment = SetTestEnvironment;
