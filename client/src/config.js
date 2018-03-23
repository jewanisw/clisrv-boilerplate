import get from 'lodash/get';

const authApi = 'http://localhost:3001';
const webFront = 'http://localhost:3000';

export default {
  server: get(window, 'env.auth') || authApi,
  client: get(window, 'env.front') || webFront,
};
