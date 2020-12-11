import  HomeActionTypes  from './home.types';
import {serviceGetAllProperty} from './home.services';

export const getAllProperty = () => async (dispatch) => {
  try {
      dispatch({
          type: HomeActionTypes.GET_ALL_PROPERTY,
      })

    const data = await serviceGetAllProperty()
    dispatch({
      type: HomeActionTypes.GET_ALL_PROPERTY_SUCCESS,
      payload: data
    })
  } catch (error) {
      dispatch({
          type: HomeActionTypes.GET_ALL_PROPERTY_FAILED,
          error
      })
  }
}


export const getDetail = (item, type) => async (dispatch) => {
      dispatch({
          type: HomeActionTypes.GET_DETAIL,
          payload: {
            item,
            type
          }
      })
 
}
