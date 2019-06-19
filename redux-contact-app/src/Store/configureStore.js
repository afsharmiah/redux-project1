import {createStore} from 'redux';
import rootReducer from '../Reducers';
export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
  }

 
 
  
  // Also, we need to pass the store in our application. So we need also to update the index.js file.