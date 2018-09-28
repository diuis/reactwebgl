import * as React from "react";
import * as ReactDOM from "react-dom";

import { Application } from "./components/Application";

ReactDOM.render(
    <Application url="https://media.w3.org/2010/05/sintel/trailer.mp4"  />,
    document.getElementById("application")
);
