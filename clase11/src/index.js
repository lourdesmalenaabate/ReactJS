import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//Incorporar Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//Tipografías Material
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import reportWebVitals from "./reportWebVitals";
import App from "./plantillas-toolkit/App";
//import HackerNews from "./plantillas-toolkit2/HackerNews";
//import App from "./plantillas-redux/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <HackerNews /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
