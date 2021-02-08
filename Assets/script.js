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

// const mainWeather = document.getElementById("#main-weather");



$("#search-button").on("click", getApi)

function getApi() {

    //  mainWeather.style.display = "block";
  

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
        var weatherimg = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        console.log(weatherimg)
        
        

        // displaying current day information
        $("#current-city").text(cityName)
        $("#temperature").text(temp)
        $("#humidity").text(humidity)
        $("#wind-speed").text(wind)
        $("#current-img").attr('src', weatherimg);


        var lat = data.coord.lat;
        var lon = data.coord.lon;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(
            'https://api.openweathermap.org/data/2.5/onecall?lat=' +
              lat +
              '&lon=' +
              lon +
              '&units=imperial&exclude=current,minutely,hourly,alerts&appid=1e9dda97d02056dc1ee084b9e12c91ed',
            requestOptions
          )
            .then((res) => res.json())
            //
            .then(function (data) {
              console.log(data)
              var uvi = data.daily[0].uvi;
    
              $('#uv-index').text(uvi);

                if (uvi > 3) {
                    $('#uv-index').css("color", "green");
                  } else if (uvi >= 3 && uvi < 6) {
                    $('#uv-index').css("color", "yellow");
                  } else {
                    $('#uv-index').css("color", "red"); 
                  }
            
                // 5 day temps
                var day1temp = data.daily[0].temp.max + " F°"
                $("#forecast-temp1").text(day1temp)
                var day2temp = data.daily[1].temp.max + " F°"
                $("#forecast-temp2").text(day2temp)
                var day3temp = data.daily[2].temp.max + " F°"
                $("#forecast-temp3").text(day3temp)
                var day4temp = data.daily[3].temp.max + " F°"
                $("#forecast-temp4").text(day4temp)
                var day5temp = data.daily[4].temp.max + " F°"
                $("#forecast-temp5").text(day5temp)

                // 5 day humidity
                var day1humidity = data.daily[0].humidity + "%"
                $("#forecast-humidity1").text(day1humidity)
                var day2humidity = data.daily[1].humidity + "%"
                $("#forecast-humidity2").text(day2humidity)
                var day3humidity = data.daily[2].humidity + "%"
                $("#forecast-humidity3").text(day3humidity)
                var day4humidity = data.daily[3].humidity + "%"
                $("#forecast-humidity4").text(day4humidity)
                var day5humidity = data.daily[4].humidity + "%"
                $("#forecast-humidity5").text(day5humidity) 

                var day1img = 'https://openweathermap.org/img/w/' + data.daily[0].weather[0].icon + '.png';
                $("#icon1").attr('src', day1img);
                var day2img = 'https://openweathermap.org/img/w/' + data.daily[1].weather[0].icon + '.png';
                $("#icon2").attr('src', day2img);
                var day3img = 'https://openweathermap.org/img/w/' + data.daily[2].weather[0].icon + '.png';
                $("#icon3").attr('src', day3img);
                var day4img = 'https://openweathermap.org/img/w/' + data.daily[3].weather[0].icon + '.png';
                $("#icon4").attr('src', day4img);
                var day5img = 'https://openweathermap.org/img/w/' + data.daily[4].weather[0].icon + '.png';
                $("#icon5").attr('src', day5img);
                
                


            });
    

      
        

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