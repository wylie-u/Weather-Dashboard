var cityList = document.getElementById("#city-list");
var searchButton = document.getElementById("#search-button");
var userInput = document.getElementById("#user-input");
const currentForecast = document.getElementById("#current-forecast");
const forecastWeather = document.getElementById("#forecast-weather");

let apiKey = "1e9dda97d02056dc1ee084b9e12c91ed";



// $(document).ready(function() {


// when search button is selected, list item is created with that city 

// for loop?? 


    


// weather icon
// set attribute then src 
// . weather .icon



// city name, search button need ids 

// searchbutton.on click me function
// var searchbutton = 

// display grids
// $("#search-button").on("click", citySearch)

// function citySearch(){
//     console.log('test')
//     currentForecast.style.display = "block";
//     console.log('test')
//     forecastWeather.style.display = "block";
// }


$("#search-button").on("click", getApi)



function getApi() {

    for (var i = 0; i < localStorage.length; i++) {

        var city = localStorage.getItem(i);
    
        value = $("#city-list").addClass("list-group-item");
    
        value.append("<li>" + city + "</li>");
        console.log('test')
    }
    


    console.log("Searched button clicked")
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
        // var weatherimg = 
        

        var humidity = data.main.humidity + "%"
        var wind = data.wind.speed + " MPH"
        console.log(wind)
        
        //other codes go here
        // need to add date to name
        $("#current-city").text(cityName)
        $("#temperature").text(temp)
        $("#humidity").text(humidity)
        $("#wind-speed").text(wind)

        // for loop for 5 day 
        var lat = data.coord.lat;
      console.log(lat)
    var lon = data.coord.lon;


    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon="+ lon + "&exclude=minutely,hourly,daily,alerts&appid=1e9dda97d02056dc1ee084b9e12c91ed", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // call uv index function (result.coord.lat, result.coord.lon)

    // uv index (lat, lon)

    // one call for daily forecasts
    // dont exclude daily 

      });
     // latitude and longitude.. not working 
     

    // fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,daily,alerts&appid=1e9dda97d02056dc1ee084b9e12c91ed")
    // console.log('test')

    //   .then(function (response) {
    //     response.json();
    //     return
    // })
    //   .then(function (data) {
    //     console.log(data)


    //   });
    // }    
    
  
 }



    
    

    

    // for (var i = 0; i < data.length; i++) {
    //     //Create a list element
    //     var listItem = document.createElement('li');
    
    //     //Set the text of the list element to the JSON response's .html_url property
    //     listItem.textContent = data[i].html_url;
    
    //     //Append the li element to the id associated with the ul element.
    //     repoList.appendChild(listItem);
    //   }

