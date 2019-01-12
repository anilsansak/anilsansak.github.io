import * as React from "react";
// import injectSheet from "react-jss";
import Landing from "./Landing";
import Header from "../Header";
import Story from "../Story";
import Projects from "../Projects";
import Footer from "../Footer";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Story />
        <Projects />
        <Footer />
      </div>
    );
  }
}
