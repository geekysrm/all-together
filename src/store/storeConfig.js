import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import reducers from "./reducers";

const middlewares = [thunk.withExtraArgument(getFirebase)];

let composeEnhancer = compose;

composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
