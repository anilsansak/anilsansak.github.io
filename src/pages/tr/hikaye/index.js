import React from "react";
import StoryTemplate from "../../../templates/story";
import { setLocalLanguage } from "../../../utilities/index";

export default function StoryTurkish() {
  setLocalLanguage("tr");
  return (
    <div lang="en">
      <StoryTemplate />
    </div>
  );
}
