//Step 6: Make one reducer inside reducers folder.
//Reducers are used to update the state object in your store. Just like actions, your application can have multiple reducers.

import * as actionTypes from '../Actions/actionType';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];
      case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
  };