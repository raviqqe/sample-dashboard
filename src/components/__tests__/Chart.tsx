import * as React from "react";
import * as ReactDOM from "react-dom";

import Chart from "../Chart";

test("Render a component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Chart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
