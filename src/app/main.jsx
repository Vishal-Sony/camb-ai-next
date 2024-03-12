import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DataContextProvider } from "./dataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
