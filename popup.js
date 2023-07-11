document.addEventListener('DOMContentLoaded', function() {
  var getWeatherButton = document.getElementById('get-weather-button');
  getWeatherButton.addEventListener('click', function() {
    var cityInput = document.getElementById('city-input');
    var cityName = cityInput.value;
    getWeather(cityName);
  });
});

function getWeather(cityName) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(cityName) + '&appid=b3b55ce55465d53b0361293bdd77af4e';

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayWeather(data);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

function displayWeather(data) {
  var weatherDetails = document.getElementById('weather-details');
  weatherDetails.innerHTML = '';

  var temperature = data.main.temp;
  var description = data.weather[0].description;
  var humidity = data.main.humidity;
  var windSpeed = data.wind.speed;

  var temperatureElement = document.createElement('p');
  temperatureElement.textContent = 'Temperature: ' + temperature + ' K';

  var descriptionElement = document.createElement('p');
  descriptionElement.textContent = 'Description: ' + description;

  var humidityElement = document.createElement('p');
  humidityElement.textContent = 'Humidity: ' + humidity + '%';

  var windSpeedElement = document.createElement('p');
  windSpeedElement.textContent = 'Wind Speed: ' + windSpeed + ' m/s';

  weatherDetails.appendChild(temperatureElement);
  weatherDetails.appendChild(descriptionElement);
  weatherDetails.appendChild(humidityElement);
  weatherDetails.appendChild(windSpeedElement);
}
