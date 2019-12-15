
/*---------------------- Tutorial for single day forcast ----------*/
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === ""){
      var error = '<h2 class="text-center m-1 mt-3"> Please enter a city </h2>'
      document.getElementById("weatherResults").innerHTML = error;
      return;
    }
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=ea7646e34e3c420c620cba0938ded508";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
          console.log(json);	
        let results = "";
        results += '<h2 class="text-center">Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
      results += '<img class="rounded mx-auto d-block" src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h3 class="text-center">' + json.main.temp + " &deg;F</h3>"
        results += '<p class="text-center">'
        for (let i=0; i < json.weather.length; i++) {
      results += json.weather[i].description
      if (i !== json.weather.length - 1)
        results += ", "
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
        document.getElementById("footer").style.position = "absolute";

      })
});


/*---------------------- 5 - day forcast -----------------------*/
document.getElementById("weatherSubmit-5").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === ""){
      var error = '<h2 class="text-center m-1 mt-3"> Please enter a city </h2>'
      document.getElementById("weatherResults").innerHTML = error;
      return;
    }
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ",US&units=imperial" + "&APPID=ea7646e34e3c420c620cba0938ded508";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);		
        let results = "";
        results += '<h2 class="text-center m-1 mt-3">5-day forecast for ' + json.city["name"] + "</h2>";
        results += '<div class="container mb-3">';
        var currentDate = extractDate(json.list[0].dt_txt)
        results += '<h3 class="m-1 mt-3">' + currentDate + '</h3>'
        results += '<div class="row align-items-center m-1">'
        for(let q=0; q < json.list.length; q++){
          var object = json.list[q];
          if (currentDate != extractDate(object.dt_txt)){
            currentDate = extractDate(object.dt_txt);
            results += '</div>'
            results += '<h3 class="m-1 mt-3">' + currentDate + '</h3>'
            results += '<div class="row align-items-center m-1">'
          }
          results += '<div class="col-sm text-center">'
            for (let i=0; i < object.weather.length; i++) {
             results += '<img src="http://openweathermap.org/img/w/' + object.weather[i].icon + '.png"/>';
            }
            results += '<h5>' + object.main.temp + " &deg;F</h5>"
            results += "<p>"
            for (let i=0; i < object.weather.length; i++) {
             results += object.weather[i].description
             if (i !== object.weather.length - 1)
            results += ", "
            }
            results += "</p>";
            results += '</div>'
        }
        results += '</div>'
        results += '</div>'
        document.getElementById("weatherResults").innerHTML = results;
        document.getElementById("footer").style.position = "relative";
      })
});

function extractDate(x) 
{
  return x.slice(0, 10);
}