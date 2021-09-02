// the value from combineReducers.
import rootReducer from '../reducers';
// Third party.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));
