import * as constants from '../Actions/constants';

const initialState = {
  name: '',
  image: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_USER:
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      }
    default: 
      return{ ...state }
  }
}

export default userReducer;