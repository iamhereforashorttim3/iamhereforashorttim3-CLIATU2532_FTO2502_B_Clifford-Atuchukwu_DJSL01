// scripts/main.js

import { podcasts, genres } from "./initialData.js";
import { renderPodcastList } from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("podcast-list");
  renderPodcastList(podcasts, listContainer, genres);
});
