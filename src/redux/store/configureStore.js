import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

//reducers
import entriesReducer from '../reducer/entries.reducer';
import modalReducer from '../reducer/modals.reducer';

// redux-saga
import { initSagas } from '../../sagas';
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

//const middleware = [sagaMiddleware]; for multiple middleware

// creation of root reducer
const rootReducer = combineReducers(
    {
        entries: entriesReducer,
        modals: modalReducer
    }
);

// creation of the store
const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))//...middleware
    );

    initSagas(sagaMiddleware);

    //sagaMiddleware.run(initSagas);

    return store;
}

export default configureStore;