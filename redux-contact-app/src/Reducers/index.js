//Step 7: Create combineReducer function.
//Inside reducers folder, make one file called index.js file.
import { combineReducers } from 'redux';
import contacts from './contactReducer';

export default combineReducers({
    contacts: contacts
});

// then 
// Now, update the configureStore function and pass the rootReducer to it.