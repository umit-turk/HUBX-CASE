import {combineReducers} from 'redux';
import markOnBoardingReducer from './markOnBoarding/mark.reducer';

export const RootReducer = combineReducers({
  markState: markOnBoardingReducer,
});
