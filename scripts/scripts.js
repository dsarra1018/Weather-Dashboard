$(document).ready(function(){
    // array of searches
    let searches = [];



    
    // // ajax call
    // let APIkey = "03d3a9bae74e45b5a5a50325200303";
    // let searches = [];
    // let queryURL = "https://api.weatherapi.com/v1/forecast.json?key=" + APIkey + "&q=baltimore&days=6";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response){
    //     console.log(response);
    // })

    // on click listener
    $("#searchBtn").on("click", function(event){
        event.preventDefault();

        // grab the input from the textbox
        let city = $("#citySearch").val().trim();

        // add city into the array
        if (searches.includes(city)) {
            return false;
        }
        else {
            searches.push(city);
        }
    })
})
