const API_KEY = "86d0d70d2d6fb5ce713b8caed582eb53";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=metric`;
  const airPollutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  fetch(weatherURL).then((response) =>
    response.json().then((data) => {
      const district = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      district.innerText = data.name;
      weather.innerText = `${data.weather[0].description}/${data.main.temp}°C`;
    })
  );
  fetch(airPollutionURL).then((response) =>
    response.json().then((data) => {
      const airQuality = document.querySelector("#weather span:last-child");
      airQuality.innerText = data.list[0].main.aqi;
    })
  );
}

function onGeoError() {
  alert("Can't find you! No weather for you:(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
