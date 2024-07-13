//  const apiKey ="ba057895b4bae73e78cfef1db72aaa90";
//  const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${apiKey}`;

// const searchBtn = document.querySelector(".icon-searcher")
// const searchInput = document.querySelector(".line-name-searcher");

// const weatherIcon = document.querySelector(".weather-imege");



//  async function checkWeather(city){
//     const response= await fetch(apiUrl+ city +`&appid=${apiKey}`);
//     const data =await response.json();
//     console.log(data,"data");

//     document.querySelector(".city").innerHTML =data.name;
//     document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "&#8451";
//     document.querySelector(".humidity-percent").innerHTML =data.main.humidity;
//     document.querySelector(".wind-speed-percent").innerHTML =data.wind.speed;
//     document.querySelector(".pressure-percent").innerHTML =data.main.pressure;

//     if (data.weather[0].main ==="Mist"){
//         weatherIcon.innerHTML = `<img class="weather-imege" src="./img/clouds.svg" alt="">`
//          }
        
//  }



// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchInput.value);
//     searchInput.value =""
// })


// checkWeather();











const apiKey = "768e0288406389e6e0f9840659813b24";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector(".line-name-searcher");

const searchButton = document.querySelector(".icon-searcher");

const weatherIcon = document.querySelector(".weather-imege");

const weather = document.querySelector(".main-block-forecast");

const changeImg =document.querySelector(".weather-imege");

const date =document.querySelector(".date");

const errorText = document.querySelector(".error");


// const axios = require('axios');
// async function getW(cityName){
//   try{
//     const responsee= await axios.get(apiUrl);
//     console.log('5day', responsee.data);
//   }catch(error){
//     console.log(error);
//   }
// }
// getW('minsk')

// fetch(apiUrl).then(response=>response.json()).then(data=>{console.log(data);})


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    errorText.style.display = "block";
    weather.style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "&#8451";
    document.querySelector(".humidity-percent").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed-percent").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".what-wheather-name").innerHTML = data.weather[0].main;
    document.querySelector(".pressure-percent").innerHTML = data.main.pressure;
    document.querySelector(".uv-percent").innerHTML = data.visibility;
   document.querySelector(".fillslike").innerHTML=Math.round(data.main.feels_like) + "&#8451"; 
    const dateD =new Date();
    const day =dateD.getDate();
    // const month = dateD.getMonth()+1;
    const month = dateD.toLocaleString('en-EN', {month: 'long'});
    const year =dateD.getFullYear();
    date.innerHTML = day +" "+ month +" " +year +"" ;

    


///////////////////////////////
//     let dateSunrice= new Date().toISOString().split('T')[0].data.sys.sunrise;
//    let sunrise= document.querySelector(".sunrise-time");
//  dateSunrice = sunrise.innerHTML;
////////////////////////////



  //  sunrise=data.sys.sunrise;
  // let dateSunrice =new Date(`1970-01-01T${sunrise}Z`);
  // let sunriseLocal = dateSunrice.toLocaleString('en-EN')
  // sunriseLocal= sunrise.innerHTML

    // sunrise.toLocaleString('en-EN').innerHTML=data.sys.sunrise




    if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-imege").src="./img/clear 2.svg" ;
    } else if (data.weather[0].main == 'Rain') {
        document.querySelector(".weather-imege").src="./img/rain 1.svg" ;
    } else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-imege").src="./img/mist 1.svg" ;
    } else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-imege").src="./img/drizzle 1.svg" ;
    }else if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-imege").src="./img/clouds 1.svg" ;
  }
    weather.style.display = "block";
    errorText.style.display = "none";


    const timezoneOffest = data.timezone;
    const nowUts = new Date().getTime()+new Date().getTimezoneOffset()*60000;
    const cityTime = new Date(nowUts+timezoneOffest*1000);
    const timeString = cityTime.toTimeString().split(' ')[0].substring(0, 5);
    // return timeString;
    // console.log(cityTime);
    document.querySelector(".time").innerHTML = timeString;
  }
  
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
  searchInput.value = "";
});

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    checkWeather(searchInput.value);
    searchInput.value = "";
  }
});