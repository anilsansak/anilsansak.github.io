import * as React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  Skills: {
    width: "100%",
    height: "100%"
  },
  SkillsCarrier: {
    maxWidth: 1000,
    margin: "48px auto",
    width: "100%"
  },
  SkillsTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  SkillsSection: {
    display: "flex",
    flexDirection: "row"
  },
  Section: {
    display: "flex",
    flexDirection: "column",
    width: "33%",
    margin: 24,
    alignItems: "center",
    boxShadow: "5px 5px #000",
    border: "1px solid #000"
  },
  SectionTitle: {},
  SectionContent: {},
  "@media (max-width:500px)": {
    SkillsSection: {
      flexDirection: "column",
      width: "100%"
    },
    Section: {
      width: "90%",
      margin: "24px auto"
    }
  }
});

class Skills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="skills" className={classes.Skills}>
        <div className={classes.SkillsCarrier}>
          <div className={classes.SkillsTitle}>
            <h1>Skills</h1>
          </div>
          <div className={classes.SkillsSection}>
            <div className={classes.Section}>
              <div className={classes.SectionTitle}>
                <h2>Programming</h2>
              </div>
              <div className={classes.SectionContent}>
                <ul>
                  <li>React</li>
                  <li>GatsbyJS</li>
                  <li>javascript</li>
                  <li>Html5/Css3</li>
                  <li>React Native</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
            <div className={classes.Section}>
              <div className={classes.SectionTitle}>
                <h2>Tools</h2>
              </div>
              <div className={classes.SectionContent}>
                <ul>
                  <li>Git</li>
                  <li>Android Studio</li>
                  <li>XCode</li>
                  <li>Google Tag Manager</li>
                </ul>
              </div>
            </div>
            <div className={classes.Section}>
              <div className={classes.SectionTitle}>
                <h2>Languages</h2>
              </div>
              <div className={classes.SectionContent}>
                <ul>
                  <li>English</li>
                  <li>Turkish</li>
                  <li>German</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Skills);
