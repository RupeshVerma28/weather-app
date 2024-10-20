// script.js
document.getElementById('search').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '734167c610msh77ffd3ab967c149p17f0afjsneeb134b49bc6'; // Your RapidAPI key
    const apiHost = 'open-weather13.p.rapidapi.com';
    
    try {
        const response = await fetch(`https://${apiHost}/city/${city}/EN`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost
            }
        });
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data: ", error);
        alert("City not found, please try again.");
    }
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temp').textContent = `${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;

    // Use local PNG images for weather icons
    const weatherCondition = data.weather[0].main.toLowerCase();
    let iconPath = 'weather.png'; // Default icon

    if (weatherCondition === 'clear') {
        iconPath = 'sunny.png';
    } else if (weatherCondition === 'clouds') {
        iconPath = 'cloudy.png';
    } else if (weatherCondition === 'rain') {
        iconPath = 'rainy.png';
    } else if (weatherCondition === 'snow') {
        iconPath = 'snow.png';
    }

    document.getElementById('weather-icon').src = iconPath;
}
let iconPath = 'C:/path/to/your/project/icons/weather.png'; // Use the actual path to your file
