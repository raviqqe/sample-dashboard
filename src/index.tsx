import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./register-service-worker";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
