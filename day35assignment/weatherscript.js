const apiKey = "126a213e098da1dd31e6508d685e5df1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const imageIcon = document.querySelector(".imageIcon");
async function getWeather(zip){
	const weather = await fetch(apiUrl + `${zip},US` + `&appid=${apiKey}`);
	
	if(weather.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {

	}
	let data = await weather.json();

	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temperatureHigh").innerHTML = Math.round(data.main.temp_max) + "°F High";
	document.querySelector(".temperatureCurrent").innerHTML = Math.round(data.main.temp) + "°F Currently";
	document.querySelector(".temperatureLow").innerHTML = Math.round(data.main.temp_min) + "°F Low";
	document.querySelector(".windSpeed").innerHTML = Math.round(data.wind.speed) + " mph";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".feelsLike").innerHTML = Math.round(data.main.feels_like) + "°F";
	document.querySelector(".currentDay").innerHTML = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    document.querySelector(".currentYear").innerHTML = new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
	
	if (data.weather[0].main == "Clouds"){
		imageIcon.src = "image/clouds.png";
	} else if (data.weather[0].main == "Clear"){
		imageIcon.src = "image/clear.png";
	}
	else if (data.weather[0].main == "Rain"){
		imageIcon.src = "image/rain.png";
	}
	else if (data.weather[0].main == "Snow"){
		imageIcon.src = "image/snow.png";
	}
	else if (data.weather[0].main == "Drizzle"){
		imageIcon.src = "image/drizzle.png";
	}
	
	document.querySelector(".weather").style.display = "block";
	document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener("click", ()=> {
	getWeather(search.value);
})
