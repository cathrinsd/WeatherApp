//Challenge1
function formatDate(date) {
  let now = new Date();
  let today = document.querySelector("#currentDate");
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  return `Today | ${day}, ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#currentDate");
let now = new Date();
dateElement.innerHTML = formatDate(now);

//Challenge2
function showTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#windSpeed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#sky").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let unit = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  // if (searchInput.value) {
  //   cityInput.innerHTML = searchInput.value;
  //    let searchInput = document.querySelector("#search-text-input");
  //let cityInput = document.querySelector("#city");
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

let searchEngine = document.querySelector("#searchForm");
searchEngine.addEventListener("submit", handleSubmit);

// search outside all functions, so by default its Zurich as city that is displayed
searchCity("Zurich");
//Challenge3

//Week5

function searchLocation(position) {
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

function displayCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", displayCurrentLocation);
