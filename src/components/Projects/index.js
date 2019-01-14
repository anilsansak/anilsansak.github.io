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
    backgroundColor: "#000",
    color: "#fff"
  },
  Title: {},
  Text: {},
  Desc: {},
  Stack: {},

  "@media (max-width:500px)": {}
});

class Projects extends React.Component {
  state = {
    focused: "none"
  };
  renderBudgetpack = () => {
    if (this.state.focused === "budgetpack") {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>not focused</p>
        </div>
      );
    }
  };
  renderMevzubahis = () => {
    if (this.state.focused === "mevzubahis") {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>not focused</p>
        </div>
      );
    }
  };
  renderBouncingBallzz = () => {
    if (this.state.focused === "bouncingballzz") {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>not focused</p>
        </div>
      );
    }
  };
  renderPersonalWebsite = () => {
    if (this.state.focused === "personalwebsite") {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>not focused</p>
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
                {this.renderBudgetpack()}
              </div>
              <div
                id="mevzubahis"
                className={classes.Project}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.renderMevzubahis()}
              </div>
            </div>
            <div className={classes.Section}>
              <div
                id="bouncingballzz"
                className={classes.Project}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.renderBouncingBallzz()}
              </div>
              <div
                id="personalwebsite"
                className={classes.Project}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                {this.renderPersonalWebsite()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Projects);
