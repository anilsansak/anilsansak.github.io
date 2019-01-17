import React from "react";
import StoryTemplate from "../../../templates/story";
import { setLocalLanguage } from "../../../utilities/index";

export default function StoryEnglish() {
  setLocalLanguage("en");
  return (
    <div lang="en">
      <StoryTemplate />
    </div>
  );
}
