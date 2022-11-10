import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

//reducers
import entriesReducer from '../reducer/entries.reducer';
import modalReducer from '../reducer/modals.reducer';


// creation of root reducer
const rootReducer = combineReducers(
    {
        entries: entriesReducer,
        modals: modalReducer
    }
);

// creation of the store
const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;