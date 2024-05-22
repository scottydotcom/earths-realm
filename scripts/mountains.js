"use strict";

function createImageElement(src) {
  const img = document.createElement("img");
  img.src = "images/" + src;
  return img;
}

function createTextElement(className, text) {
  const element = document.createElement("div");
  element.classList.add(className);
  element.innerText = text;
  return element;
}

function createMountainCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.appendChild(createImageElement(item.img));
  card.appendChild(createTextElement("card-title", item.name));
  card.appendChild(createTextElement("card-description", `${item.desc}`));

  return card;
}

function filter() {
  const selectedname = document.getElementById("name").value;
  if (selectedname === "Select a Mountain") {
    showMountains(mountainsArray);
  } else {
    showMountains(mountainsArray.filter(function(mountain) {
      return mountain.name === selectedname;
    }));
  }
}

function showMountains(mountains) {
  const results = document.getElementById("results");
  results.innerText = "";

  for (let mountain of mountains) {
    results.appendChild(createMountainCard(mountain));
  }
}

