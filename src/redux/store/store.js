
import { applyMiddleware } from 'redux';
import { moviesReducer } from '../reducers/moviesReducer';
import { createStore } from './redux';
import { thunk } from 'redux-thunk';

export const store = createStore(moviesReducer,applyMiddleware(thunk))