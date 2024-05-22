function option(text) {
  const parkOption = document.createElement("option");
  parkOption.innerHTML = text;
  return parkOption;
}

function getPark(park) {
  const element = document.createElement("div");
  element.classList.add("park");

  element.innerHTML = `
        <hr>
        <h3>${park.LocationName}</h3>
        <h4>${park.LocationID}</h4>
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
