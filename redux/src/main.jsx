import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import store from "./app/store.js"; 
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
