import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import registerServiceWorker from "./register-service-worker";
import "./style.ts";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
