function option(text) {
  const parkOption = document.createElement("option");
  parkOption.innerHTML = text;
  return parkOption;
}

function getPark(park) {
  const element = document.createElement("div");
  element.classList.add("park");

  element.innerHTML = `
        
        <h3>${park.LocationName}</h3>
        <h4>${park.Address} ${park.City}</h4>
        <h4>${park.ZipCode} ${park.Phone}</h4>
        <div>${park.State}</div>
    `;
  if (park.hasOwnProperty("Visit")) {
    const link = park.Visit;
    const text = park.LocationName;
    element.innerHTML += `
        <div><a href="${link}" class="visit-site"> ${text} </a></div>
        `;
  }
  return element;
}
document.addEventListener("DOMContentLoaded", () => {
  function showResults() {
    let filtered = [];
    if (locationRadio.checked) {
      filtered = nationalParksArray.filter(
        (parkOption) =>
          parkOption.State.toUpperCase() === locations.value.toUpperCase()
      );
    } else {
      filtered = nationalParksArray.filter((parkOption) =>
        parkOption.LocationName.toUpperCase().includes(
          parkTypes.value.toUpperCase()
        )
      );
    }
    results.innerHTML = ""; //CLEAR OUT THE OLD
    filtered.forEach((displaPark) => results.appendChild(getPark(displaPark)));
  }
  locations.addEventListener("change", showResults);
  parkTypes.addEventListener("change", showResults);

  function handleSearchBy(e) {
    if (locationRadio.checked) {
      locationLabel.style.display = "block";
      parkTypeLabel.style.display = "none";
    } else {
      locationLabel.style.display = "none";
      parkTypeLabel.style.display = "block";
    }
    showResults();
  }
  locationRadio.addEventListener("click", handleSearchBy);
  parkTypeRadio.addEventListener("click", handleSearchBy);

  locationsArray
    .map(option)
    .forEach((locationCategory) => locations.appendChild(locationCategory));

  parkTypesArray
    .map(option)
    .forEach((parkCategory) => parkTypes.appendChild(parkCategory));
}); //end loaded
