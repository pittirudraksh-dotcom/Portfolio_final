const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = isDarkMode
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
});

console.log("JavaScript connected");

// Search by project title, description, or technology.
const projectSearch = document.getElementById("projectSearch");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectSearchStatus = document.getElementById("projectSearchStatus");
const noProjectsMessage = document.getElementById("noProjectsMessage");

function filterProjects() {
  const query = projectSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const searchableText = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
    const matches = searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  projectSearchStatus.textContent = query
    ? `Showing ${visibleCount} of ${projectCards.length} projects for "${projectSearch.value.trim()}".`
    : `Showing all ${projectCards.length} projects.`;
  noProjectsMessage.hidden = visibleCount !== 0;
}

projectSearch.addEventListener("input", filterProjects);

// Existing weather feature (preserved).
const cityInput = document.getElementById("cityInput");
const weatherButton = document.getElementById("weatherButton");
const weatherResult = document.getElementById("weatherResult");

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.textContent = "Please enter a city.";
    return;
  }

  weatherResult.textContent = "Loading weather...";

  const apiKey = "8409c3b8439e34afb48a7476c83666a8";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    weatherResult.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
  } catch (error) {
    weatherResult.textContent = "Unable to fetch weather. Please try again.";
    console.error(error);
  }
}

weatherButton.addEventListener("click", getWeather);
