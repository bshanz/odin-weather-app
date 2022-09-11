// cache the dom

const temp = document.getElementById("temp");
const weatherName = document.getElementById("weather-name");
const cityName = document.getElementById("city-name");
const img = document.querySelector("img");

const changeToCelsiusBtn = document.getElementById("celsius-btn");

const userInput = document.getElementById("search-dom");
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-form");

let weatherDisplay = "fahrenheit";

// function to pull in the current weather by city name in F
async function currentWeatherFahrenheit() {
  try {
    // get API response based on user input city
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=101d6bd455b9fc6a78f52d9f17ae12c8&units=imperial
          `,
      { mode: "cors" }
    );

    //store the response in searchData
    const searchData = await response.json();
    console.log(searchData);

    // set the proper city name
    cityName.innerText = searchData.name;

    //round current temp
    const currentTemp = Math.round(searchData.main.temp);

    // set UI to current temp
    temp.innerText = `${currentTemp}°F`;

    //get city MAIN weather

    const cityCurrentWeather = searchData.weather[0].main;

    // set the weather icon to the current weather
    if (
      cityCurrentWeather.includes("Rain") === true ||
      cityCurrentWeather.includes("Drizzle") === true
    ) {
      img.src = "icons/rain.png";
    } else if (
      cityCurrentWeather.includes("Sun") === true ||
      cityCurrentWeather.includes("Clear") === true
    ) {
      img.src = "icons/sun.png";
    } else if (cityCurrentWeather.includes("Snow") === true) {
      img.src = "icons/snow.png";
    } else if (cityCurrentWeather.includes("Thunderstorm") === true) {
      img.src = "icons/thunderstorm.png";
    } else if (cityCurrentWeather.includes("Clouds") === true) {
      img.src = "icons/cloudy.png";
    } else {
      img.src = "icons/temp.png";
    }

    // get current weather description
    const weatherDescription = searchData.weather[0].description;
    // store in final weather
    const finalWeather = capitalizeFirstLetter(weatherDescription);

    //set UI to current weather description
    weatherName.innerText = finalWeather;

    console.log(searchData);
  } catch (error) {
    cityName.innerText = "Not found!";
    alert("City not found! Please try another.");
    userInput.value = "";
    userInput.innerText = "";
  }
}

// function that pulls in weather data in celsius
async function currentWeatherCelsius() {
  try {
    // get API response based on user input city
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=101d6bd455b9fc6a78f52d9f17ae12c8&units=metric
          `,
      { mode: "cors" }
    );

    //store the response in searchData
    const searchData = await response.json();
    console.log(searchData);

    // set the proper city name
    cityName.innerText = searchData.name;

    //round current temp
    const currentTemp = Math.round(searchData.main.temp);

    // set UI to current temp
    temp.innerText = `${currentTemp}°C`;

    //get city MAIN weather

    const cityCurrentWeather = searchData.weather[0].main;

    // set the weather icon to the current weather
    if (
      cityCurrentWeather.includes("Rain") === true ||
      cityCurrentWeather.includes("Drizzle") === true
    ) {
      img.src = "icons/rain.png";
    } else if (
      cityCurrentWeather.includes("Sun") === true ||
      cityCurrentWeather.includes("Clear") === true
    ) {
      img.src = "icons/sun.png";
    } else if (cityCurrentWeather.includes("Snow") === true) {
      img.src = "icons/snow.png";
    } else if (cityCurrentWeather.includes("Thunderstorm") === true) {
      img.src = "icons/thunderstorm.png";
    } else if (cityCurrentWeather.includes("Clouds") === true) {
      img.src = "icons/cloudy.png";
    } else {
      img.src = "icons/temp.png";
    }

    // get current weather description
    const weatherDescription = searchData.weather[0].description;
    // store in final weather
    const finalWeather = capitalizeFirstLetter(weatherDescription);

    //set UI to current weather description
    weatherName.innerText = finalWeather;

    console.log(searchData);
  } catch (error) {
    cityName.innerText = "Not found!";
    alert("City not found! Please try another.");
    userInput.value = "";
    userInput.innerText = "";
  }
}

//function to captialze first letter of weather description
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// enable user to switch back and forth between F and C
changeToCelsiusBtn.addEventListener("click", function (e) {
  if (
    cityName.innerText === "Mount Olympus" &&
    weatherDisplay === "fahrenheit"
  ) {
    temp.innerText = "21°C";
    changeToCelsiusBtn.innerText = "Change to Fahrenheit";
    weatherDisplay = "celsius";
  } else if (
    cityName.innerText === "Mount Olympus" &&
    weatherDisplay === "celsius"
  ) {
    temp.innerText = "70°F";
    changeToCelsiusBtn.innerText = "Change to Celsius";
    weatherDisplay = "fahrenheit";
  } else if (weatherDisplay === "fahrenheit") {
    currentWeatherCelsius();
    changeToCelsiusBtn.innerText = "Change to Fahrenheit";
    weatherDisplay = "celsius";
  } else {
    currentWeatherFahrenheit();
    changeToCelsiusBtn.innerText = "Change to Celsius";
    weatherDisplay = "fahrenheit";
  }
  console.log(cityName.innerText);
});

form.addEventListener("submit", async function (e) {
  try {
    // get API response based on user input city
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=101d6bd455b9fc6a78f52d9f17ae12c8&units=imperial
      `,
      { mode: "cors" }
    );

    //store the response in searchData
    const searchData = await response.json();
    console.log(searchData);

    // set the proper city name
    cityName.innerText = searchData.name;

    //round current temp
    const currentTemp = Math.round(searchData.main.temp);

    // set UI to current temp
    temp.innerText = `${currentTemp}°F`;

    //get city MAIN weather

    const cityCurrentWeather = searchData.weather[0].main;

    // set the weather icon to the current weather
    if (
      cityCurrentWeather.includes("Rain") === true ||
      cityCurrentWeather.includes("Drizzle") === true
    ) {
      img.src = "icons/rain.png";
    } else if (
      cityCurrentWeather.includes("Sun") === true ||
      cityCurrentWeather.includes("Clear") === true
    ) {
      img.src = "icons/sun.png";
    } else if (cityCurrentWeather.includes("Snow") === true) {
      img.src = "icons/snow.png";
    } else if (cityCurrentWeather.includes("Thunderstorm") === true) {
      img.src = "icons/thunderstorm.png";
    } else if (cityCurrentWeather.includes("Clouds") === true) {
      img.src = "icons/cloudy.png";
    } else {
      img.src = "icons/temp.png";
    }

    // get current weather description
    const weatherDescription = searchData.weather[0].description;
    // store in final weather
    const finalWeather = capitalizeFirstLetter(weatherDescription);

    //set UI to current weather description
    weatherName.innerText = finalWeather;

    // make button fahrenheit
    weatherDisplay = "fahrenheit";
    changeToCelsiusBtn.innerText = "Change to Celsius";

    console.log(searchData);
  } catch (error) {
    cityName.innerText = "Not found!";
    alert("City not found! Please try another.");
    userInput.value = "";
    userInput.innerText = "";
  }
});
