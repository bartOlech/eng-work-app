import * as constants from '../Actions/constants';

const initialState = {
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_AUTH:
      return {
        ...state,
        isAuth: true,
      }
    default: 
      return{ ...state }
  }
}

export default authReducer;