import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  {store, persistor} from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/css/reset.css";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
  </Provider>,
  document.getElementById("root")
);
