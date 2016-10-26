console.log("hello, world");

var movieInput = document.getElementById("movie-input");
var movieButton = document.getElementById("movie-button");
var movieForm = document.getElementById("movie-form");

var movieTitle = document.getElementById("movie-title");
var moviePoster = document.getElementById("movie-poster");
var moviePlot = document.getElementById("movie-plot");

movieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var movieName = movieInput.value;

    var url = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&r=json";

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var responseText = httpRequest.responseText;

                var responseJson = JSON.parse(responseText);

                movieTitle.textContent = responseJson.Title;
                moviePoster.src = responseJson.Poster;
                moviePlot.textContent = responseJson.Plot;
            }
        }
    };

    httpRequest.open('GET', url, true);
    httpRequest.send();

    return false;

    // console.log(url);
});
