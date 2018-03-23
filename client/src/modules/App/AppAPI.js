import callApi from '../../util/apiCaller';

export function getDemoMessage() {
  return callApi('demo');
}
