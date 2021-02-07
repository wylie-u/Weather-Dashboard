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

    var searchField = $("input").attr('id');
    var value = $(this).siblings('#user-input').val();

    
    localStorage.setItem(searchField, value)

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
            .then(response => response.json())
            .then(result => {
                // fiveDay(result)
                uvIndex(result)
            })
            .catch(error => console.log('error', error));

      
        

    })

    userSearch()

};


function userSearch(){

    for (var i = 0; i < localStorage.length; i++) {

        var city = localStorage.getItem("user-input");
    
        value = $("#city-list").addClass("list-group-item");
    
        value.append("<li>" + city + "</li>");
        
    }
    
   
}

function uvIndex(){

    var uvi = daily[0].uvi
  
     $("#uv-index").text(uvi)
    console.log('test')

}


// fiveDay(){


// }



