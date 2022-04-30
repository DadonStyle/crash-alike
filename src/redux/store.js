import { createStore, combineReducers } from 'redux';
import { connectionReducer as connection } from './reducers/connectionReducer';

const reducers = combineReducers({ connection });

export const store = createStore(
  reducers,
  // eslint-disable-next-line no-undef
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
