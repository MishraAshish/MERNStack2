console.log("Entry point of react application for webpack to start module bundling");
import React from "react";
import {render} from "react-dom";
import App, {App2} from "./app/app";

render(
        <App />,//The react application, wrapped up using provider from react-redux
        document.getElementById("root") //rendering react application over root element created in index.html : bootstrapping
)