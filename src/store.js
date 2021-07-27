import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};


const loggerMiddleware = store => next => action => {
  console.log("STATE BEFORE", store.getState());
  console.log("ACTION DISPATCHED", action);
  next(action);
  console.log("STATE AFTER", store.getState());
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, loggerMiddleware)),
  
);

export default store;