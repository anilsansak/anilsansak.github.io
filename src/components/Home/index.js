import * as React from "react";
// import injectSheet from "react-jss";
import Landing from "./Landing";
import Header from "../Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
      </div>
    );
  }
}
