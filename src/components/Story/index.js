import * as React from "react";
// import injectSheet from "react-jss";
import Timeline from "./Timeline";
import Header from "../Header";
import Footer from "../Footer";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Timeline />
        <Footer />
      </div>
    );
  }
}
