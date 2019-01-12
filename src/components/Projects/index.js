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
    margin: "48px auto"
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
  Project: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottom: "1px dashed #454545",
    marginTop: 48
  },
  Title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
    marginRight: 24
  },
  Text: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: 24
  },
  Desc: {},
  Stack: {},
  Links: {
    "& img": {
      width: 32,
      height: 32
    }
  },
  "@media (max-width:500px)": {
    Project: {
      flexDirection: "column",
      marginTop: 24
    },
    Title: {
      alignItems: "center",
      marginRight: 0
    },
    Text: {
      marginLeft: 0
    }
  }
});
class Projects extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="projects" className={classes.Projects}>
        <div className={classes.ProjectsCarrier}>
          <div className={classes.ProjectsTitle}>
            <h1>My Projects</h1>
          </div>
          <div className={classes.ProjectsMain}>
            <div className={classes.Project}>
              <div className={classes.Title}>
                <h3>Budgetpack</h3>
              </div>
              <div className={classes.Text}>
                <div className={classes.Desc}>
                  <p>
                    Budgetpack is an app that created for people who are on
                    budget and want to travel the world and do as much as they
                    can.
                  </p>
                </div>
                <div className={classes.Stack}>
                  <p>Tech Stack:</p>

                  <ul>
                    <li>Android</li>
                    <li>Java</li>
                    <li>Firebase</li>
                  </ul>
                </div>
                <div className={classes.Links}>
                  <a href="https://github.com/anilsansak/Budgetpack">
                    <img
                      alt="github"
                      src={require("../../img/github-logo.png")}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.Project}>
              <div className={classes.Title}>
                <h3>Mevzubahis</h3>
              </div>
              <div className={classes.Text}>
                <div className={classes.Desc}>
                  <p>
                    Senior Year Project. An Android app that lets users
                    challenge their friends in both sportive and social
                    subjects.
                  </p>
                </div>
                <div className={classes.Stack}>
                  <p>Tech Stack:</p>
                  <ul>
                    <li>Android</li>
                    <li>Java</li>
                    <li>Firebase</li>
                  </ul>
                </div>
                <div className={classes.Links}>
                  <a href="https://github.com/anilsansak/MevzuBahis">
                    <img
                      alt="github"
                      src={require("../../img/github-logo.png")}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.Project}>
              <div className={classes.Title}>
                <h3>BouncingBallzz</h3>
              </div>
              <div className={classes.Text}>
                <div className={classes.Desc}>
                  <p>A 2D Android game made with Unity.</p>
                </div>
                <div className={classes.Stack}>
                  <p>Tech Stack:</p>
                  <ul>
                    <li>Unity</li>
                    <li>C#</li>
                  </ul>
                </div>
                <div className={classes.Links}>
                  <a href="https://github.com/anilsansak/BouncingBallzz">
                    <img
                      alt="github"
                      src={require("../../img/github-logo.png")}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.Project}>
              <div className={classes.Title}>
                <h3>anilsansak.github.io</h3>
              </div>
              <div className={classes.Text}>
                <div className={classes.Desc}>
                  <p>Personal website made with Gatsby.</p>
                </div>
                <div className={classes.Stack}>
                  <p>Tech Stack:</p>
                  <ul>
                    <li>GatsbyJS</li>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Github Pages</li>
                  </ul>
                </div>
                <div className={classes.Links}>
                  <a href="https://github.com/anilsansak/anilsansak.github.io">
                    <img
                      alt="github"
                      src={require("../../img/github-logo.png")}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Projects);
