import React from "react";
import HomeTemplate from "../../templates/homepage";
import { setLocalLanguage } from "../../utilities/index";

export default function HomeEnglish() {
  setLocalLanguage("en");
  return (
    <div lang="en">
      <HomeTemplate />
    </div>
  );
}
