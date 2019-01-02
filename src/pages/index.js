import React from "react";
import Helmet from "react-helmet";
import { getLang } from "../utilities";

export default class HomePageRedirect extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Yaşar Anıl Sansak</title>
          <meta http-equiv="refresh" content={`0;URL='/${getLang()}/'`} />
        </Helmet>
      </div>
    );
  }
}
