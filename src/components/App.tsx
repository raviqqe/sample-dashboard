import * as React from "react";

import Chart from "./Chart";
import Header from "./Header";

export default class extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Chart />
      </div>
    );
  }
}
