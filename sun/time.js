// Coordinates for New York
const latitude = 40.71427
const longitude = -74.00597
const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.querySelector('#sunrise').innerHTML = data.results.sunrise
    document.querySelector('#sunset').innerHTML = data.results.sunset
  document.querySelector('#raw-output').innerHTML = JSON.stringify(data)
  })
  .catch(error => console.error('Error:', error))