const apikey = "6a758ce608ce7938944ab38d82e637ab";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    
    const response = await fetch(api_url+ city + `&appid=${apikey}`);

    if(response.status == 404 || city ==""){
         document.querySelector('#para').style.display="none";
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();

        
         document.querySelector(".city-name").innerHTML = data.name;
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
         document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
    
         if(data.weather[0].main == "Clouds"){
                  weatherIcon.src="./assets/clouds.png";
         }else if(data.weather[0].main == "Clear"){
            weatherIcon.src="./assets/clear.png";
         }   
         else if(data.weather[0].main == "Rain"){
            weatherIcon.src="./assets/rain.png";
         }  
         else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="./assets/drizzle.png";
         }  
         else if(data.weather[0].main == "Mist"){
            weatherIcon.src="./assets/mist.png";
         }    
    }
    
}
searchButton.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

