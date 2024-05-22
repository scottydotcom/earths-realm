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

