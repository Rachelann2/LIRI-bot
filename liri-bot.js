const axios = require("axios")


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: "335746b2dd7c467aaf9d0ef9292c2151",
    secret: "3c9962bfe8b74fdf9e2a698f7f63bd08"
});

spotify
    .search({ type: 'track', query: 'All the Small Things' })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });