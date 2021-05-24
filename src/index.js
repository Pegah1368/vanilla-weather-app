functuin displayTemperature(response){
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=response.data.name;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML=response.data.main.temp;
}

let apiKey = "5057d48b02a6aea197a7f37d83ba709c";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityElement}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(displayTemperature);