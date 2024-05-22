// "use strict";

// document.addEventListener("DOMContentLoaded", () => {
//   const parkResultsContainer = document.querySelector("#results");
//   const locationSelect = document.querySelector("#location");
//   const parkTypeSelect = document.querySelector("#type");
//   const searchInput = document.querySelector("#search");

//   // Create options for select elements
//   for (const location of locationsArray) {
//     const locationOption = document.createElement("option");
//     locationOption.value = location;
//     locationOption.text = location;
//     locationSelect.appendChild(locationOption);
//   }

//   for (const parkType of parkTypesArray) {
//     const parkTypeOption = document.createElement("option");
//     parkTypeOption.value = parkType;
//     parkTypeOption.text = parkType;
//     parkTypeSelect.appendChild(parkTypeOption);
//   }

//   // Function to create a park card element
//   function createParkCard(park) {
//     let parkCard;
//     if (park.Visit) {
//       parkCard = document.createElement("a");
//       parkCard.href = park.Visit;
//       parkCard.target = "_blank";
//     } else {
//       parkCard = document.createElement("div");
//     }
//     parkCard.className = "card";
//     parkCard.innerText = `${park.LocationName} ${park.Address} ${park.State}`;

//     return parkCard;
//   }

//   // Function to filter and show park cards
//   function showParkCards() {
//     const selectedLocation = locationSelect.value;
//     const selectedParkType = parkTypeSelect.value;
//     const searchQuery = searchInput.value.toLowerCase();

//     const filteredParks = [];
//     for (const park of nationalParksArray) {
//       const locationMatch =
//         selectedLocation === "" || park.State === selectedLocation;
//       const parkTypeMatch =
//         selectedParkType === "" ||
//         park.LocationName.toLowerCase().includes(
//           selectedParkType.toLowerCase()
//         );
//       const searchMatch =
//         searchQuery === "" ||
//         park.LocationName.toLowerCase().includes(searchQuery);
//       if (locationMatch && parkTypeMatch && searchMatch) {
//         filteredParks.push(park);
//       }
//     }
//     parkResultsContainer.innerText = "";
//     for (const park of filteredParks) {
//       parkResultsContainer.appendChild(createParkCard(park));
//     }
//   }

//   // Add event listeners
//   locationSelect.addEventListener("change", showParkCards);
//   parkTypeSelect.addEventListener("change", showParkCards);
//   searchInput.addEventListener("keyup", showParkCards);

//   // Show all park cards initially
//   showParkCards();
// });