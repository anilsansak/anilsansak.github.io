import React from "react";
import HomeTemplate from "../../templates/homepage";
import { setLocalLanguage } from "../../utilities/index";

export default function HomeTurkish() {
  setLocalLanguage("tr");
  return (
    <div lang="tr">
      <HomeTemplate />
    </div>
  );
}
