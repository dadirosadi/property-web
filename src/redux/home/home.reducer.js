import HomeActionTypes from './home.types'

const INITIAL_STATE = {
    data: [],
    loading: false,
    success: false
  };
  
  const HomeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case HomeActionTypes.GET_ALL_PROPERTY:
        return {
          ...state,
          loading: true,
          success: false
        };
          
      default:
        return state;
    }
  };
  
  export default HomeReducer;
  