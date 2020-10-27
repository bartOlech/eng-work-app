import * as constants from './constants';

export const getUser = (name, image) => ({
  type: constants.GET_USER,
  payload: {
    name, 
    image
  }
})