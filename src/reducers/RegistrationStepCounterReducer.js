import { CREATE_STRATEGY_STEP_COUNTER } from "../actions/types";

const initialState = {
  step: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_STRATEGY_STEP_COUNTER:
      return {
        ...state,
        step: action.step,
      };
    default:
      return state;
  }
}
