import "@animxyz/core";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "~hooks/useAuth";

import "../node_modules/flowbite/dist/flowbite.js";

import App from "./App";
import { graphqlClient } from "./common/graphql";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";

import "./styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={store}>
            <ApolloProvider client={graphqlClient}>
              <App />
            </ApolloProvider>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);

serviceWorker.unregister();
