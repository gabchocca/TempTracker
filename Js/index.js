const keyApi = "ae4a071fd2ce4578a2e144013252304";
const language = "es";
const input_city = document.getElementById("input_city");


async function getClimate(){
    const city = input_city.value;

    if (!city){
        alert("Por favor, ingrese una ciudad");
        return;
    }

    const actualApiClient = `https://api.weatherapi.com/v1/current.json?q=${city}&lang=${language}&key=${keyApi}`;
    const response = await fetch(apiClientActual)
    const data = await response.json()
    showClimate(data)
}

function showClimate(data){
    document.querySelector('.icon_climate').src = data.current.condition.icon;
    document.querySelector('.text_climate').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + "°C";
    document.querySelector('.city').innerHTML = data.location.name
    document.querySelector('.humidity').innerHTML = data.current.humidity + "%"
    document.querySelector('.wind').innerHTML = data.current.wind_kph + "km/h"
} 