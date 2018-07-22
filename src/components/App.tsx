import * as React from "react";
import styled from "styled-components";

import Chart from "./Chart";
import Header from "./Header";

const Content = styled.div`
  padding: 1em;
`;

export default class extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Content>
          <Chart />
        </Content>
      </div>
    );
  }
}
