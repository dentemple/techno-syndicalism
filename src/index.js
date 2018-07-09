import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// state imports - Redux
import { Provider } from "react-redux";
import configureStore from "state/store";

// style impotrs
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// polyfill imports
import "whatwg-fetch"; // Provides additional support for fetch on older browsers

// Configure the app state
const store = configureStore();

// Store a reference to the DOM element [Hot Module Reloading]
const root = document.getElementById("root");

// Wrap our render in a reusable function [Hot Module Reloading]
let render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    root
  );
};

// Configures Hot Module Reloading
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./App", () => {
      setTimeout(render);
    });
  }
}

// Render the app
render();
