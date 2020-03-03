// ajax call
let APIkey = "03d3a9bae74e45b5a5a50325200303";
let loc = prompt("Enter a city: ");
let queryURL = "https://api.weatherapi.com/v1/forecast.json?key=" + APIkey + "&q=" + loc + "&days=5";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})