import { MarkActionTypes } from "./mark.action.type";

const initialState = {
  onboardingComplete: false,
};

const markOnBoardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case MarkActionTypes.setMark:
      return {
        ...state,
        onboardingComplete: true,
      };
    case MarkActionTypes.clear:
      return {
       initialState,
      };
    default:
      return state;
  }
};

export default markOnBoardingReducer;
