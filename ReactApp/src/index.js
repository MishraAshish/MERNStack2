console.log("Bootstrapping The Application");
import React from "react"; //reactid1 = react
import {render} from "react-dom";
import App, {App2} from "./app/app";

render(
        <App />,//The react application, wrapped up using provider from react-redux
        document.getElementById("root") //rendering react application over root element created in index.html : bootstrapping
)