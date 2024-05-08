/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testMatch: [
    '**/tests/**/*.test.[jt]s?(x)',
  ],
  setupFiles: ['fake-indexeddb/auto'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};

module.exports = config;
