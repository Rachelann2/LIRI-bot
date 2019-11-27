require("dotenv").config();

var keys = require("./keys.js");
console.log(keys);
var Spotify = require("node-spotify-api");

var moment = require("moment");

var spotify = new Spotify(keys.spotify);

// calling the specific positions on the array
var activities = process.argv[2]
var userInput = process.argv[3]
// function to call this certain event (concert)
function concertThis(event) {

}

if (activities === "concert-this") {
    concertThis(userInput);
}


function spotifySong(song) {
    spotify
        .search({ type: 'track', query: song })
        .then(function (response) {
            console.log(response.tracks.items[0]);

            //create an array to be pushed too

            var artists = [];

            for (var i = 0; i < response.tracks.items[0].artists.length; i++) {
                artists.push(response.tracks.items[0].artists[i]);

                console.log(artists[i].name)

            }

            var songName = response.tracks.items[0].name
            console.log(songName)

            var previewLink = response.tracks.items[0].preview_url
            console.log(previewLink)

            var album = response.tracks.items[0].album
            console.log(album)

        })
        .catch(function (err) {
            console.log(err);
        });
}

if (activities === "spotify-this-song") {
    spotifySong(userInput);
}






function movieView(show) {

}

if (activities === "movie-this") {
    movieView(userInput);
}











function DoWhatSay(input) {

}

if (activities === "do-what-it-says") {
    DoWhatSay(userInput)
}

