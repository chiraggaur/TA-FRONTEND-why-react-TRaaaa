import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import Test, { Class, FruitsName } from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([<Test />, <FruitsName />, <Class />]);