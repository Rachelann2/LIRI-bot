console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};


// let song = process.argv[2];

// let term = process.argv.slice(3).join("");

// if (!search) {
//     search = "spotify-this-song";
// }
// if (!term) {
//     term = "The Sign by Ace of Base";
// }