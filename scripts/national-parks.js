document.addEventListener("DOMContentLoaded", () => {
  const parkResultsContainer = document.getElementById("results");
  const locationSelect = document.getElementById("location");
  const parkTypeSelect = document.getElementById("type");
  const searchInput = document.getElementById("search");

  // Create options for select elements
  for (const location of locationsArray) {
    const locationOption = document.createElement("option");
    locationOption.value = location;
    locationOption.text = location;
    locationSelect.appendChild(locationOption);
  }

  for (const parkType of parkTypesArray) {
    const parkTypeOption = document.createElement("option");
    parkTypeOption.value = parkType;
    parkTypeOption.text = parkType;
    parkTypeSelect.appendChild(parkTypeOption);
  }