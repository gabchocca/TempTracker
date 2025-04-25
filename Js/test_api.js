
const keyApi = "ae4a071fd2ce4578a2e144013252304";
const language = "es";
const city = "Huancayo";

const apiClientActual = `https://api.weatherapi.com/v1/current.json?q=${city}&lang=${language}&key=${keyApi}`;


const response = await fetch(apiClientActual);
let data = await response.json();
console.log(data);


