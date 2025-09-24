import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};

export default config;
