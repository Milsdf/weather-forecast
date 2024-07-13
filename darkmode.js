function changeMode(color){
document.body.style.background= color;
}
function bgSwither(){
    document.getElementById('mode').onclick = function(){
        changeMode( rgb(255, 255, 255))
    }
}

window.onload=bgSwither;








https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=<your-api-key>&cnt=5

const key = '**** Your API Key Here ****';

function weatherForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=' + key+'&cnt=5')  
    .then(function(resp) {
        return resp.json() 
    })
    .then(function(data) {
        console.log('--->'+(JSON.stringify(data)));
        drawWeather(data);
    })
    .catch(function() {
        // catch any errors
    });
}

function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description; 
    
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name+' '+d.sys.country;
}



//Event Listeners on button click
document.addEventListener("DOMContentLoaded", () => {
    // Handling button click
    document.querySelector(".button-search").addEventListener("click", () => {
        const searchedCity = document.querySelector('.text-search');
        console.log(searchedCity.value);
        if(searchedCity.value){
            weatherForecast(searchedCity.value);
        }       
   }) 
 });