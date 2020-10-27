import * as constants from '../Actions/constants';

const initialState = {
  mainMatchedData: [],
  secondMatchedData: {},
}

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_MAIN_MATCHED:
      return {
        ...state,
        mainMatchedData: action.payload.response,
      }
    case constants.GET_SECOND_MATCHED:
      return {
        ...state,
        secondMatchedData: action.payload.response,
      }
    default: 
      return{ ...state }
  }
}

export default matchReducer;