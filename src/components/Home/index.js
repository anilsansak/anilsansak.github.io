import * as React from "react";
// import injectSheet from "react-jss";
import Landing from "./Landing";
import Header from "../Header";
import Skills from "../Skills";
import Projects from "../Projects";
import Footer from "../Footer";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}
