import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import store from './store'
import { Provider } from 'react-redux'
const client = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <QueryClientProvider client={client}>
  <Provider store={store}>
 <App />
</Provider>
  </QueryClientProvider>,
  rootElement
);
