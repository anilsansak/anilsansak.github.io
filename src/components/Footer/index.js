import * as React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  Footer: {
    width: "100%",
    height: "100%"
  },
  FooterCarrier: {
    height: "100%",
    maxWidth: 1000,
    margin: "24px auto 0px auto",
    display: "flex",
    flexDirection: "column"
  },
  SocialMedia: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  Logo: {
    "& img": {
      width: 32,
      height: 32
    },
    margin: "0px 12px"
  },
  FooterText: {
    textAlign: "center"
  }
});
class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Footer}>
        <div className={classes.FooterCarrier}>
          <div className={classes.SocialMedia}>
            <div className={classes.Logo}>
              <a href="https://twitter.com/anilsansak">
                <img
                  alt="twitter logo"
                  src={require("../../img/twitter.svg")}
                />
              </a>
            </div>
            <div className={classes.Logo}>
              <a href="https://github.com/anilsansak">
                <img
                  alt="github logo"
                  src={require("../../img/github-logo.png")}
                />
              </a>
            </div>
            <div className={classes.Logo}>
              <a href="https://gitlab.com/anilsansak">
                <img alt="gitlab logo" src={require("../../img/gitlab.png")} />
              </a>
            </div>
          </div>
          <div className={classes.FooterText}>
            <p>2019</p>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Footer);
