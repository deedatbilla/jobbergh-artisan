import { CREATE_STRATEGY_STEP_COUNTER} from './types';

export const stepCounter = (step) => {
  return {
    type: CREATE_STRATEGY_STEP_COUNTER,
    step:step
    
  };
};
