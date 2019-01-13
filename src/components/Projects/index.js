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
    focused: ""
  };
  renderBudgetpack = () => {
    if (this.state.isFocused) {
      return (
        <div>
          <p>not focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    }
  };
  renderMevzubahis = () => {
    if (this.state.isFocused) {
      return (
        <div>
          <p>not focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    }
  };
  renderBouncingBallzz = () => {
    if (this.state.isFocused) {
      return (
        <div>
          <p>not focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    }
  };
  renderPersonalWebsite = () => {
    if (this.state.isFocused) {
      return (
        <div>
          <p>not focused</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>is focused</p>
        </div>
      );
    }
  };

  handleClick = e => {
    console.log("dsafsa", e.target.id);
    if (e.target.id) {
      this.setState({ isFocused: false });
    } else {
      this.setState({ isFocused: true });
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
                onClick={e => this.handleClick(e)}
              >
                {this.renderBudgetpack()}
              </div>
              <div
                id="mevzubahis"
                className={classes.Project}
                onClick={this.handleClick}
              >
                {this.renderMevzubahis()}
              </div>
            </div>
            <div className={classes.Section}>
              <div
                id="bouncingballzz"
                className={classes.Project}
                onClick={this.handleClick}
              >
                {this.renderBouncingBallzz()}
              </div>
              <div
                id="personalwebsite"
                className={classes.Project}
                onClick={this.handleClick}
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
