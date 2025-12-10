import { Environment } from 'common/model/common.model';

export const environment: Environment = {
  development: true,
  production: false,
  apiHost: 'to be filled with real value by environment.dev.ts etc.',
  keycloakUrl: 'http://localhost:8765',
};
