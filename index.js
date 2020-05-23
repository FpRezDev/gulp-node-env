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
 * Set current process.env.NODE_ENV === 'development'
 * @returns {string} current value of process.env.NODE_ENV
 */
const SetDevelopmentEnvironment = () => {
  return _SetEnvironment(Development);
};

/**
 * Set current process.env.NODE_ENV === 'production'
 * @returns {string} current value of process.env.NODE_ENV
 */
const SetProductionEnvironment = () => {
  return _SetEnvironment(Production);
};

/**
 * Set current process.env.NODE_ENV === 'test'
 * @returns {string} current value of process.env.NODE_ENV
 */
const SetTestEnvironment = () => {
  return _SetEnvironment(Test);
};

exports.IsDevelopment = IsDevelopment;
exports.IsProduction = IsProduction;
exports.IsTest = IsTest;
exports.SetDevelopmentEnvironment = SetDevelopmentEnvironment;
exports.SetProductionEnvironment = SetProductionEnvironment;
exports.SetTestEnvironment = SetTestEnvironment;
