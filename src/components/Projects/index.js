import * as React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  Projects: {
    width: "100%",
    height: "100%"
  },
  ProjectsCarrier: {
    width: "100%",
    height: "100%",
    maxWidth: 1000,
    margin: "48px auto",
    marginBottom: 0
  },
  ProjectsTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  ProjectsMain: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  Section: {
    display: "flex",
    flexDirection: "row"
  },
  Project: {
    width: "50%",
    height: 300,
    margin: 24,
    border: "1px solid black"
  },
  ProjectContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
    pointerEvents: "none"
  },

  Title: {},
  Stack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  },
  SingleStack: {
    "& img": {
      width: 32,
      height: 32
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  Desc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0px 12px"
  },

  "@media (max-width:500px)": {
    Section: {
      flexDirection: "column"
    },
    Project: {
      width: "100%",
      margin: "24px 0px"
    }
  }
});

class Projects extends React.Component {
  state = {
    focused: "none"
  };
  renderBudgetpack = classes => {
    if (this.state.focused === "budgetpack") {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Desc}>
            <p>
              Budgetpack is an app that created for people who are on budget and
              want to travel the world and do as much as they can.
            </p>
          </div>
          <div className={classes.Stack}>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/android-logo.svg")} />
              <p>Android</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="java" src={require("../../img/java.svg")} />
              <p>Java</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/firebase.svg")} />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Title}>
            <p>Budgetpack</p>
          </div>
        </div>
      );
    }
  };
  renderMevzubahis = classes => {
    if (this.state.focused === "mevzubahis") {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Desc}>
            <p>
              Senior Year Project. An Android app that lets users challenge
              their friends in both sportive and social subjects.
            </p>
          </div>
          <div className={classes.Stack}>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/android-logo.svg")} />
              <p>Android</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="java" src={require("../../img/java.svg")} />
              <p>Java</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/firebase.svg")} />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Title}>
            <p>Mevzubahis</p>
          </div>
        </div>
      );
    }
  };
  renderBouncingBallzz = classes => {
    if (this.state.focused === "bouncingballzz") {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Desc}>
            <p>A 2D Android game made with Unity.</p>
          </div>
          <div className={classes.Stack}>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/unity.svg")} />
              <p>Unity</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="java" src={require("../../img/c-sharp-logo.svg")} />
              <p>C#</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Title}>
            <p>BouncingBallzz</p>
          </div>
        </div>
      );
    }
  };
  renderPersonalWebsite = classes => {
    if (this.state.focused === "personalwebsite") {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Desc}>
            <p>Personal website built with Gatsby.</p>
          </div>
          <div className={classes.Stack}>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/gatsby.svg")} />
              <p>GatsbyJS</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="java" src={require("../../img/react.svg")} />
              <p>React</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/js.svg")} />
              <p>Javascript</p>
            </div>
            <div className={classes.SingleStack}>
              <img alt="android" src={require("../../img/css-3.svg")} />
              <p>CSS</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.ProjectContainer}>
          <div className={classes.Title}>
            <p>anilsansak.github.io</p>
          </div>
        </div>
      );
    }
  };

  handleMouseOver = e => {
    if (e.target.id) {
      this.setState({ focused: e.target.id });
    }
  };
  handleMouseOut = () => {
    if (this.state.focused !== "none") {
      this.setState({ focused: "none" });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="projects" className={classes.Projects}>
        <div className={classes.ProjectsCarrier}>
          <div className={classes.ProjectsTitle}>
            <h1>My Projects</h1>
          </div>
          <div className={classes.ProjectsMain}>
            <div className={classes.Section}>
              <div
                id="budgetpack"
                className={classes.Project}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.renderBudgetpack(classes)}
              </div>
              <div
                id="mevzubahis"
                className={classes.Project}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.renderMevzubahis(classes)}
              </div>
            </div>
            <div className={classes.Section}>
              <div
                id="bouncingballzz"
                className={classes.Project}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.renderBouncingBallzz(classes)}
              </div>
              <div
                id="personalwebsite"
                className={classes.Project}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.renderPersonalWebsite(classes)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Projects);
