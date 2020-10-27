import * as constants from './constants';

export const getSecondMatched = (response) => ({
  type: constants.GET_SECOND_MATCHED,
  payload: {
    response
  }
})