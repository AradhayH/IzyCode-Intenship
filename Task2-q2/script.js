    async function getWeather() {
        let cityName = document.getElementById('city-input').value;
        try {
            const coordinates = await getCoordinates(cityName);
            const { lat, lon } = coordinates[0];
            const weatherData = await fetchWeather(lat, lon);
            displayWeather(weatherData,cityName,lat,lon);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
    async function getCoordinates(cityName) {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=a1ce1dad2c61f20f47a4d05116f3144a`;
        const response = await fetch(url);
        const information = await response.json();
        return information;
    }
    async function fetchWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a1ce1dad2c61f20f47a4d05116f3144a`;
        const response = await fetch(url);
        return response.json();
    }
    function displayWeather(information,cityname,lat,lon) {
        document.getElementById('location').textContent="Loaction: "+cityname;
        document.getElementById('lat').textContent="Latitude: "+lat;
        document.getElementById('lon').textContent="Longitude: "+lon;
        document.getElementById('weather-icon').innerHTML =`<img src="http://openweathermap.org/img/wn/${information.weather[0].icon}.png" class="weather-icon" alt="Weather Icon">`;
        document.getElementById('weather-description').textContent = "Description:"+information.weather[0].description;
        const temperatureinC = Math.round(information.main.temp - 273.15); 
        document.getElementById('temperatureinc').textContent = `Temperature: ${temperatureinC}°C`;
    }