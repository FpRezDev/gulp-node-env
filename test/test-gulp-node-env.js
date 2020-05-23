const expect = require('chai').expect;
const env = require('../index');

describe('gulp-node-env', () => {

    it('should exist', () => {
      expect(env).to.exist;
    });

    it('should set environment = development', () => {
      env.SetDevelopmentEnvironment();
      expect(process.env.NODE_ENV).to.equal('development');
    });

    it('should set environment = production', () => {
      env.SetProductionEnvironment();
      expect(process.env.NODE_ENV).to.equal('production');
    });

    it('should set environment = test', () => {
      env.SetTestEnvironment();
      expect(process.env.NODE_ENV).to.equal('test');
    });

    it('should return true from IsDevelopment()', () => {
      process.env.NODE_ENV = 'development';
      var currentEnv = env.IsDevelopment();
      expect(currentEnv).to.be.true;
    });

    it('should return false from IsDevelopment()', () => {
      process.env.NODE_ENV = 'test';
      var currentEnv = env.IsDevelopment();
      expect(currentEnv).to.be.false;
    });

    it('should return true from IsProduction()', () => {
      process.env.NODE_ENV = 'production';
      var currentEnv = env.IsProduction();
      expect(currentEnv).to.be.true;
    });

    it('should return false from IsProduction()', () => {
      process.env.NODE_ENV = 'test';
      var currentEnv = env.IsProduction();
      expect(currentEnv).to.be.false;
    });

    it('should return true from IsTest()', () => {
      process.env.NODE_ENV = 'test';
      var currentEnv = env.IsTest();
      expect(currentEnv).to.be.true;
    });

    it('should return false from IsProduction()', () => {
      process.env.NODE_ENV = 'production';
      var currentEnv = env.IsTest();
      expect(currentEnv).to.be.false;
    });
});