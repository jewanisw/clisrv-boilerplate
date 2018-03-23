import config from '../config';

const API_URL = config.server;

export default function callApi(endpoint, method = 'get', body, fetchParams = {}) {
  /* eslint no-param-reassign: off */
  const token = localStorage.getItem('token');
  const headers = {
    'content-type': 'application/json',
  };
  if (token) {
    headers.token = token;
  }
  if (typeof body === 'object') {
    body = JSON.stringify(body);
  }
  return fetch(`${API_URL}/${endpoint}`, {
    headers,
    method,
    body,
    ...fetchParams,
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          // TODO unauthenticate and redirect here
        }
        return Promise.reject();
      }
      return response.json();
    }, () => {
      // TODO unauthenticate and redirect here
      return Promise.reject();
    })
    .then(
      response => response,
      error => error
    );
}
