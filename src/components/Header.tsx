import * as React from "react";
import styled from "styled-components";

const Header = styled.div`
  font-size: 2em;
  width: 100%;
  height: 2em;
`;

export default class extends React.Component {
  public render() {
    return <Header>Sample Dashboard</Header>;
  }
}
