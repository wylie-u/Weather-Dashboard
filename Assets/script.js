


// search a city and submit
// pulls weather information for specific city 
// adds to search history 
//    -- local storage
//    -- create an element to add to search bar 


// city name, search button need ids 

// searchbutton.on click me function
// var searchbutton = 

$("#search-button").on("click", getApi)

function getApi() {
    //console.log("Searched button clicked")
    var time = $("input").attr('id');
    var value = $(this).siblings('#user-input').val();
    
    //console.log(value)
    localStorage.setItem(time, value)
    
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=1e9dda97d02056dc1ee084b9e12c91ed";
    //console.log(requestUrl);

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)

        var cityName = data.name
        var temp = data.main.temp
        var humidity = data.main.humidity
        var wind = data.wind.speed
        
        //other codes go here

        $("#current-city").text(cityName)
        $("#temperature").text(temp)
        //how to convert kelvin to farenheit
        $("#humidity").text(humidity)
        $("#wind-speed").text(temp)



      });
      
  }
  
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city 
//is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// -- main card information 
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// if statements for colors 
// if temp is... color = ...
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
