import * as React from "react";
import injectSheet from "react-jss";
const styles = theme => ({
  Story: {
    width: "100%",
    height: "100%"
  },
  StoryCarrier: {
    width: "100%",
    maxWidth: 1000,
    display: "flex",
    flexDirection: "column",
    margin: "auto"
  },
  StoryTitle: {},
  StoryMain: {}
});
class Story extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="story" className={classes.Story}>
        <div className={classes.StoryCarrier}>
          <div className={classes.StoryTitle}>
            <h1>My Story</h1>
          </div>
          <div className={classes.StoryMain}>
            <p>story main</p>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Story);
