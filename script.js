function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";
    
    if (searchInput == "") {
        weatherDataSection.innerHTML = `
        <div>
          <h2>Input is Empty!</h2>
          <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        `;
        return;
      }

      async function getLonAndLat() {

      }

      async function getWeatherData(lon, lat) {

      }
}

