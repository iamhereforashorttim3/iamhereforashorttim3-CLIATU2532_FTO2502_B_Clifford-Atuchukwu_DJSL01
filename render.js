export function renderPodcastList(podcasts, container, genres) {
  container.innerHTML = "";
  const template = document.getElementById("podcast-template");

  podcasts.forEach((podcast) => {
    const clone = template.content.cloneNode(true);
    const $ = (selector) => clone.querySelector(selector);

    const genreTitles = podcast.genres
      .map((id) => genres.find((g) => g.id === id)?.title || "Unknown")
      .join(", ");

    $(".podcast-image").src = podcast.image;
    $(".podcast-image").alt = `Cover image for ${podcast.title}`;
    $(".podcast-title").textContent = podcast.title;
    $(".podcast-seasons").textContent = `Seasons: ${podcast.seasons}`;
    $(".podcast-genres").textContent = genreTitles;
    $(".podcast-updated").textContent = `Last updated: ${new Date(
      podcast.updated
    ).toLocaleDateString()}`;

    container.appendChild(clone);
  });
}
