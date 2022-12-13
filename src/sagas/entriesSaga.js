import { call, fork, put, take } from 'redux-saga/effects';
import entriesTypes from '../redux/action/entries.actions';
import axios from 'axios';
import {
    populateEntries,
    populateEntryDetails,
} from '../redux/action/entries.actions';

export function* getAllEntries() {

    //take - Creates an Effect description that instructs the middleware to wait 
    //for a specified action on the Store. The Generator is suspended until an 
    //action that matches [pattern] is dispatched.
    yield take(entriesTypes.GET_ENTRIES);

    //call - Creates an Effect description that instructs the middleware 
    //to call the function fn with args as arguments.
    const { data } = yield call(axios, 'http://localhost:3002/entries');

    //put - Creates an Effect description that instructs 
    //the middleware to dispatch an action to the Store. 
    yield put(populateEntries(data));
}

export function* getEntryDetails(id) {

    //call - Creates an Effect description that instructs the middleware 
    //to call the function fn with args as arguments.
    const { data } = yield call(axios, `http://localhost:3002/values/${id}`);

    //put - Creates an Effect description that instructs 
    //the middleware to dispatch an action to the Store. 
    yield put(populateEntryDetails(id, data));
}
export function* getAllEntriesDetails() {

    //take - Creates an Effect description that instructs the middleware to wait 
    //for a specified action on the Store. The Generator is suspended until an 
    //action that matches [pattern] is dispatched.
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);

    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        //fork - Creates an Effect description that instructs the 
        //middleware to perform a non-blocking call on [fn], same like call but non-blocking
        yield fork(getEntryDetails, entry.id);
    }
}

//takeEvery - Spawns a saga on each action 
//dispatched to the Store that matches pattern.

//takeLatest - Spawns a saga on each action 
//dispatched to the Store that matches pattern. 
//And automatically cancels any previous saga task 
//started previously if it's still running.