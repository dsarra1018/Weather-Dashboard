$(document).ready(function(){
    // search history
    let searches = [];

    // on click listener
    $("#citySearch").keypress(function(event) { 
	
        if (event.keyCode === 13) { 
            event.preventDefault();
            $("#searchBtn").click(); 
        } 
    });

    $("#searchBtn").on("click", function(event){
        event.preventDefault();

        // grab the input from the textbox
        let city = $("#citySearch").val().trim();


        // add city into the array
        if (searches.includes(city)) {
            $("#citySearch").val("");
        }
        else {
            searches.push(city);
            searchHistoryList(city);
        }

        // empty the search bar
        $("#citySearch").val("");

        // ajax call
        let APIkey = "03d3a9bae74e45b5a5a50325200303";
        let queryURL = "https://api.weatherapi.com/v1/forecast.json?key=" + APIkey + "&q=" + city + "&days=6";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){

            // displaying information
            console.log(response);
            $(".city").text(response.location.name + " (" + moment().format('L') + ") ");
            $(".temp").text("Temperature: " + response.current.temp_f + " °F");
            $(".humidity").text("Humidity: " + response.current.humidity + " %");
            $(".wind").text("Wind Speed: " + response.current.wind_mph + " MPH");
            let uv = JSON.stringify(response.current.uv);
            $(".uvIndex").text("UV Index: " + uv);
            
        })
    })

    // populating the search history with items on array
    function searchHistoryList(cityName){

        let search = $("<li>");
        search.text(cityName);
        search.attr("class", "list-group-item");
        $("#searchHistory").append(search);
    }



})
