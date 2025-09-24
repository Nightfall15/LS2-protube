import '@testing-library/jest-dom/extend-expect';

import { enableMocks } from 'jest-fetch-mock';

jest.mock('src/utils/Env', () => ({
  API_BASE_URL: 'other',
  MEDIA_BASE_URL: 'development',
}));

enableMocks();
