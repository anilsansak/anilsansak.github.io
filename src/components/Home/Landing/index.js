import * as React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  DummyText: {
    color: "red"
  }
});
class Landing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <p className={classes.DummyText}>Home Landing</p>
      </div>
    );
  }
}
export default injectSheet(styles)(Landing);
