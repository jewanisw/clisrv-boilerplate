import * as actions from './AppActions';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ROUTE_CHANGED:
      return {
        ...state,
        route: action.path,
      };
    default:
      return state;
  }
};
