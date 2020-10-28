const cityName = document.getElementById('cityName');
const form = document.querySelector('.form');
const weather = document.getElementById('weather');

const api = "https://api.openweathermap.org/data/2.5/weather?q="+cityName.value+"&appid=6cb65abf28e8ff6a6e0a8d7bb3d744ab"



form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName.value+"&appid=6cb65abf28e8ff6a6e0a8d7bb3d744ab&units=metric")
    .then(res => res.json())
    .then(data => {

        // console.log(data)
        weather.classList.add('active')

        weather.innerHTML = `
        <div class="row">
                
        <div class="col-md-6">

            <div class="city-coord">
                <div class="city">
                    <h3 style="color: #2114d8; display: inline;">${data.name},</h3><h5 style="display: inline;"> ${data.sys.country}</h5>
                </div>
                <div class="coord">
                    <h5 style="color: brown;margin-top: 20px;">Temperature: ${data.main.temp}&#176;C</h5>
                    <h5 style="color: brown;margin-top: 20px;">Feeks Like: ${data.main.feels_like}&#176;C</h5>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="weather-status">
                <div class="temp">
                    <h5 class="text-ptimary">${data.weather[0].main}</h5>
                    <div class="text-danger">${data.weather[0].description}</div>
                </div>
                <div id="icon">
                    <img src="./svg/wi-cloudy-windy.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="weather-temp row mt-5">

        <div class="temperature col-md-4">
            <h5 id="temp" class="text-primary">Max-Temperature: ${Math.round(data.main.temp_max)}&#176;C</h5>
            <h5 id="feels_like" class="text-primary">Min-Temperature: ${Math.round(data.main.temp_min)}&#176;C</h5>
        </div>
        <div class="col-md-4">
            <h3 class="text-danger">Wind:</h3>
            <div class="deg-gust">
                <h5>Degree: ${data.wind.deg}&#176;</h5>
                <h5>Speed: <i class="fa fa-location-arrow" aria-hidden="true"></i> ${data.wind.speed}m/s S</h5>

            </div>
        </div>
        <div class="col-md-4 mt-3">
            <div class="min-max">
                <h5 class="text-primary">Lon: ${data.coord.lon}</h5>
                <h5 class="text-primary">Lat: ${data.coord.lat}</h5>
            </div>
            <div class="pre-hum mt-2">
                <h5 class="text-danger">Humidity: ${data.main.humidity}%</h5>
                <h5 class="text-danger">Pressure: ${Math.round(data.main.pressure)}hPa</h5>
            </div>
        </div>
    </div>
        `

    })
})
