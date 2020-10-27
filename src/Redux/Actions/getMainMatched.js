import * as constants from './constants';

export const getMainMatched = (response) => ({
  type: constants.GET_MAIN_MATCHED,
  payload: {
    response
  }
})