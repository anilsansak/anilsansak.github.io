import * as React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  Landing: {
    width: "100%",
    height: "100%"
  },
  LandingCarrier: {
    height: "calc(100vh - 101px)",
    maxWidth: 1000,
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  LandingText: {
    width: 400,
    height: 400,
    display: "flex",
    flexDirection: "column"
  },
  LandingTextTitle: {
    "& h1": {
      margin: 0,
      fontSize: "5em"
    },
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  LandingTextDesc: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    "& p": {
      margin: 0,
      fontSize: "2em"
    },
    "& p:last-child": {
      fontWeight: 800
    }
  },
  LandingTextButtons: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    "& div": {
      width: 200,
      height: 60,
      backgroundColor: "#f2ba5b",
      borderRadius: 30,
      textAlign: "center",
      color: "#FFF",
      marginRight: 50,
      cursor: "pointer"
    },
    "& p": {
      fontWeight: 800,
      fontSize: "1.2em"
    }
  },
  LandingTextButtonAbout: {},
  LandingTextButtonContact: {},
  LandingVisual: {},
  LandingVisualImage: {
    "& img": {
      height: 400
    },
    height: 400
  },
  "@media (max-width:500px)": {
    LandingCarrier: {
      flexDirection: "column",
      height: "100%"
    },
    LandingText: {
      margin: "auto",
      height: "100%",
      width: "100%",
      marginBottom: 50
    },

    LandingTextButtons: {
      flexDirection: "column",
      alignItems: "center",
      "& div": {
        marginRight: 0,
        marginBottom: 10
      }
    },
    LandingVisual: {
      width: "100%",
      height: "100%"
    },
    LandingVisualImage: {
      height: "100%",
      width: "100%",
      "& img": {
        width: "100%",
        height: "auto"
      }
    }
  }
});
class Landing extends React.Component {
  handleAbout = () => {
    let element = document.getElementById("story");
    if (element) {
      element.scrollIntoView(true);
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Landing}>
        <div className={classes.LandingCarrier}>
          <div className={classes.LandingText}>
            <div className={classes.LandingTextTitle}>
              <h1>HELLO</h1>
            </div>
            <div className={classes.LandingTextDesc}>
              <p>I'm Anıl,</p>
              <p>a software developer.</p>
            </div>
            <div className={classes.LandingTextButtons}>
              <div
                className={classes.LandingTextButtonAbout}
                onClick={this.handleAbout}
              >
                <p>More About Me</p>
              </div>
              <div className={classes.LandingTextButtonContact}>
                <p>Contact Me</p>
              </div>
            </div>
          </div>
          <div className={classes.LandingVisual}>
            <div className={classes.LandingVisualImage}>
              <img
                alt="developer vector"
                src={require("../../../img/developer.svg")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Landing);
