import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
    </Router>

, document.querySelector("#root"));
