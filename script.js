
function fetchWeather() {

    let placeName = inputBox.value;
    console.log(placeName);
    let appid = ""  //give your apikey inside qoutes

    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${placeName}&appid=${appid} `

    fetch(url).then(res=>res.json()).then(data=>console.log(data))

    fetch(url).then(res=>res.json()).then(data=>displayWeather(data))
}

function displayWeather(weather){

    let currentDate = new Date(weather.dt * 1000);
    let date = currentDate.toDateString(); 
    let time = currentDate.toLocaleTimeString();
    let htmlData=`
        <div class="weather-card border p-4">
        <h2>${weather.name}</h2>
        <p>${date} ,${time}</p>
        <p  class="degree">${weather.main.temp}°C</p>
        <p>Wind:${weather.wind.speed}m/s  <i class="fa-solid fa-wind"></i></p>
        <p>${weather.weather[0].description} <i class="fa-solid fa-cloud"></i></p>
        </div>
        
        `
    document.querySelector("#result").innerHTML=htmlData
}




