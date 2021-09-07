import actionTypes from './actionTypes'

export const listRequest = (dispatch) => {
  dispatch({
    type: actionTypes.LIST_TRY
  });
};

export const listResponse = (data, dispatch) => {
  dispatch({
    type: actionTypes.LIST_SUCCESS,
    data
  });
};

export const listError = (dispatch) => {
  dispatch({
    type: actionTypes.LIST_FAILED
  });
};
