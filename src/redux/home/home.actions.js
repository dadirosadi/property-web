export const getAllProperty = () => async (dispatch) => {
  try {
      dispatch({
          type: HomeActionTypes.GET_ALL_PROPERTY,
      })
    dispatch({
      type: HomeActionTypes.GET_ALL_PROPERTY_SUCCESS,
      payload: result
    })
  } catch (error) {
      dispatch({
          type: HomeActionTypes.GET_ALL_PROPERTY_FAILED,
          error
      })
  }
}
