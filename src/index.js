import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import store from "./store/storeConfig";
import {
  firebase as fbConfig,
  reduxFirebase as rfbConfig,
} from "./store/config";

import App from "./App";

firebase.initializeApp(fbConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rfbConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
