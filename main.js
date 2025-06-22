import { podcasts, genres, seasons } from "./initialData.js";
import { renderPodcastList } from "./render.js";
import { openModal } from "./modal.js";
import { setupModalClose } from "./modal.js";
/**
 * Renders the list of podcasts into the container
 * Adds a click listener to open the modal with the podcast details when the podcast blocked is clicked
 */
document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("podcast-list");
  renderPodcastList(podcasts, listContainer, genres);

  listContainer.addEventListener("click", (event) => {
    const block = event.target.closest(".podcast-block");
    if (!block) return;

    const podcastId = Number(block.dataset.id);
    const podcast = podcasts.find((p) => p.id === podcastId);
    const seasonDetail =
      seasons.find((s) => s.id === podcastId)?.seasonDetails || [];

    if (podcast) {
      openModal(podcast, genres, seasonDetail);
    }
  });
  setupModalClose();
});
