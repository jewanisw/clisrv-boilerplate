import * as AppAPI from './AppAPI';

export const DEMO_MESSAGE = 'app/DEMO_MESSAGE';
export const ROUTE_CHANGED = 'app/ROUTE_CHANGED';
export const PARAMS = 'app/PARAMS';

export function routeChanged(path) {
  return {
    type: ROUTE_CHANGED,
    path,
  };
}

export function addDemoMessage() {
  return (/* dispatch */) => {
    AppAPI.getDemoMessage().then(() => {
      // dispatch(something);
    });
  };
}
