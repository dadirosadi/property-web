import HomeActionTypes from './home.types'

const INITIAL_STATE = {
    data: [],
    loading: false,
    success: false,
    item: null,
    type: ''
  };
  
  const HomeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case HomeActionTypes.GET_ALL_PROPERTY:
        return {
          ...state,
          loading: true,
          success: false
        };
        case HomeActionTypes.GET_ALL_PROPERTY_SUCCESS:
          return {
            ...state,
            loading: true,
            success: false,
            data: action.payload
          };
          case HomeActionTypes.GET_ALL_PROPERTY_FAILED:
            return {
              ...state,
              loading: true,
              success: false
            };

            case HomeActionTypes.GET_DETAIL:
              return {
                ...state,
                item: action.payload.item,
                type: action.payload.type

              };
          
      default:
        return state;
    }
  };
  
  export default HomeReducer;
  