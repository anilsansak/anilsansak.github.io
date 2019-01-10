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
    margin: "48px auto"
  },
  StoryTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  StoryMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  StoryPoint: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  StoryCircle: {
    backgroundColor: "#f2ba5b",
    width: 50,
    height: 50,
    borderRadius: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  StoryText: {
    flex: 1,
    textAlign: "center"
  },
  EmptyBlock: {
    flex: 1
  },
  StoryRectangle: {
    backgroundColor: "#000",
    width: 10,
    height: 150,
    borderRadius: 5
  }
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
            <div className={classes.StoryPoint}>
              <div className={classes.EmptyBlock} />
              <div className={classes.StoryCircle}>
                <p>1995</p>
              </div>
              <div className={classes.StoryText}>
                <p>Born</p>
              </div>
            </div>
            <div className={classes.StoryRectangle} />

            <div className={classes.StoryPoint}>
              <div className={classes.StoryText}>
                <p>Started IEU</p>
              </div>
              <div className={classes.StoryCircle}>
                <p>2013</p>
              </div>
              <div className={classes.EmptyBlock} />
            </div>

            <div className={classes.StoryRectangle} />
            <div className={classes.StoryPoint}>
              <div className={classes.EmptyBlock} />
              <div className={classes.StoryCircle}>
                <p>2016</p>
              </div>
              <div className={classes.StoryText}>
                <p>ERASMUS</p>
              </div>
            </div>
            <div className={classes.StoryRectangle} />
            <div className={classes.StoryPoint}>
              <div className={classes.StoryText}>
                <p>GRADUATED IEU</p>
              </div>
              <div className={classes.StoryCircle}>
                <p>2017</p>
              </div>
              <div className={classes.EmptyBlock} />
            </div>
            <div className={classes.StoryRectangle} />
            <div className={classes.StoryPoint}>
              <div className={classes.EmptyBlock} />
              <div className={classes.StoryCircle}>
                <p>Dec</p>
              </div>
              <div className={classes.StoryText}>
                <p>bidolubaski</p>
              </div>
            </div>
            <div className={classes.StoryRectangle} />
            <div className={classes.StoryPoint}>
              <div className={classes.StoryText}>
                <p>Otsimo</p>
              </div>
              <div className={classes.StoryCircle}>
                <p>2018</p>
              </div>
              <div className={classes.EmptyBlock} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(Story);
