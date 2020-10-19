import {combineReducers} from 'redux';
export const actionTypes = {
  INCREASE_ASYNC: 'API_INCREASE',
  INCREASE: 'INCREASE',
  DECREASE_ASYNC: 'API_DECREASE',
  DECREASE: 'DECREASE',
};

export const action = {
  increase: () => ({
    type: actionTypes.INCREASE,
  }),
  decrease: () => ({
    type: actionTypes.DECREASE,
  }),
};

export const initialState = 0;

const countReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return state + 1;
    case actionTypes.DECREASE:
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
});

export type RootState = {
  count: Number;
};

export default rootReducer;
