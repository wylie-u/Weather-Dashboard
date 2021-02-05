var cityList = document.getElementById("#city-list");
var searchButton = document.getElementById("#search-button")

// one day api :  https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=1e9dda97d02056dc1ee084b9e12c91ed

// let apiKey = "1e9dda97d02056dc1ee084b9e12c91ed";




// when search button is selected, list item is created with that city 
// push??
// array??
// for loop?? 





// search a city and submit
// pulls weather information for specific city 
// adds to search history 
//    -- local storage
//    -- create an element to add to search bar 
// id city list 


// city name, search button need ids 

// searchbutton.on click me function
// var searchbutton = 



$("#search-button").on("click", getApi)

function getApi() {

    console.log("Searched button clicked")
    var searchField = $("input").attr('id');
    var value = $(this).siblings('#user-input').val();
    
    console.log(value)
    localStorage.setItem(searchField, value)

    // for (var i = 0; i < localStorage.length; i++) {

    //     var city = localStorage.getItem(i);
    
    //      value = $("#city-list").addClass("list-group-item");
    
    //     value.append("<li>" + city + "</li>");
    //     console.log('test')
    // }
    
    // 5 day 3hr forecast
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=1e9dda97d02056dc1ee084b9e12c91ed";
    console.log(requestUrl)
    //console.log(requestUrl);

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)

        var cityName = data.name
        // var temp = data.main.temp 
        

        var humidity = data.main.humidity
        var wind = data.wind.speed
        
        //other codes go here

        $("#current-city").text(cityName)
        // $("#temperature").text(temp)
        $("#humidity").text(humidity)
        $("#wind-speed").text(temp)



      });
     
      
  }
  
  // kelvin to f
  function k2f (K) {
    Math.floor((K - 273.15) *1.8 + 32);
    console.log('test')
}


    
    

    

    // for (var i = 0; i < data.length; i++) {
    //     //Create a list element
    //     var listItem = document.createElement('li');
    
    //     //Set the text of the list element to the JSON response's .html_url property
    //     listItem.textContent = data[i].html_url;
    
    //     //Append the li element to the id associated with the ul element.
    //     repoList.appendChild(listItem);
    //   }

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city 
//is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index



// add content to each -- main card information 
// WHEN I view the UV index
// get separate api for this 


// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// if statements for colors 
// if temp is... color = ...
// WHEN I view future weather conditions for that city


// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


// WHEN I click on a city in the search history


// THEN I am again presented with current and future conditions for that city
