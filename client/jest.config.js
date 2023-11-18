module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  };