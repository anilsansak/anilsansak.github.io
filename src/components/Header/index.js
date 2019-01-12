import * as React from "react";
import injectSheet from "react-jss";
import { Link } from "gatsby";
import { getLocalLanguage } from "../../utilities/index";
const styles = theme => ({
  Header: {
    width: "100%",
    height: 100,
    borderBottom: "1px darkgray solid"
  },
  HeaderCarrier: {
    maxWidth: 1000,
    height: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& a": {
      textDecoration: "none"
    }
  },
  HeaderHome: {
    flex: 4
  },
  HeaderItem: {
    flex: 1,
    textAlign: "center"
  },
  "@media (max-width:500px)": {
    HeaderHome: {
      flex: 1,
      textAlign: "center"
    }
  }
});
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Header}>
        <div className={classes.HeaderCarrier}>
          <div className={classes.HeaderHome}>
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <div className={classes.HeaderItem}>
            <Link to={"/" + getLocalLanguage() + "/#story"}>
              <p>My Story</p>
            </Link>
          </div>
          <div className={classes.HeaderItem}>
            <Link to={"/" + getLocalLanguage() + "/#projects"}>
              <p>Projects</p>
            </Link>
          </div>
          <div className={classes.HeaderItem}>
            <Link to="/">
              <p>Resume</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Header);
