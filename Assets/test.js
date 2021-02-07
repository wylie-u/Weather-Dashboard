var cityList = document.getElementById("#city-list");
var searchButton = document.getElementById("#search-button");
var userInput = document.getElementById("#user-input");
const currentForecast = document.getElementById("#current-forecast");
const forecastWeather = document.getElementById("#forecast-weather");

// let apiKey = "1e9dda97d02056dc1ee084b9e12c91ed";


// day format

var currentDate = moment().format('L');
$("#current-date").text(currentDate);
var date1 = moment().add(1, 'days').format('L');
var date2 = moment().add(2, 'days').format('L');
var date3 = moment().add(3, 'days').format('L');
var date4 = moment().add(4, 'days').format('L');
var date5 = moment().add(5, 'days').format('L');

//dates for 5 day forecast
$("#forecast-date1").text(date1);
$("#forecast-date2").text(date2);
$("#forecast-date3").text(date3);
$("#forecast-date4").text(date4);
$("#forecast-date5").text(date5);



$("#search-button").on("click", getApi)

function getApi() {

    // list elements for search bar
    // not sure how to save to local storage

    // could be a variable naming issue
    
   
    
    

    for (var i = 0; i < localStorage.length; i++) {

        var city = localStorage.getItem("user-input");
    
        value = $("#city-list").addClass("list-group-item");
    
        value.append("<li>" + city + "</li>");
        
    }
    
    var searchField = $("input").attr('id');
    var value = $(this).siblings('#user-input').val();

    console.log(value)
    localStorage.setItem(searchField, value)
    // 5 day 3hr forecast
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&units=imperial&appid=1e9dda97d02056dc1ee084b9e12c91ed";
    
    //console.log(requestUrl);

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)

        var cityName = data.name 
        var temp = data.main.temp + " F°"
        var humidity = data.main.humidity + "%"
        var wind = data.wind.speed + " MPH"
        console.log(wind)
        var weatherimg = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        

        // displaying current day information
        $("#current-city").text(cityName)
        $("#temperature").text(temp)
        $("#humidity").text(humidity)
        $("#wind-speed").text(wind)
        $("current-img").attr('src', weatherimg);
        
        


       

        
        var lat = data.coord.lat;
        var lon = data.coord.lon;


    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon="+ lon + "&exclude=current,minutely,hourly,alerts&appid=1e9dda97d02056dc1ee084b9e12c91ed", requestOptions)
      // 
      .then(function (data) {
        
        var uvi = daily[0].uvi
  
        $("#uv-index").text(uvi)

        // uv();
    // call uv index function (result.coord.lat, result.coord.lon)

    // uv index (lat, lon)

    // one call for daily forecasts
    // dont exclude daily 

      })
      });
    // fiveDay();
    
 }

// function fiveDay(){

//need to get daily numbers from oneday api and then input values for 5 day 

function uvIndex (){

  var uvi = daily[0].uvi
  
  $("#uv-index").text(uvi)
  

}



// }





    




// display grids
// $("#search-button").on("click", citySearch)

// function citySearch(){
//     console.log('test')
//     currentForecast.style.display = "block";
//     console.log('test')
//     forecastWeather.style.display = "block";
// }


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// local storage get added 
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

    


