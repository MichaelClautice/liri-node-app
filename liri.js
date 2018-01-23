

// Liri is able to take 4 cmnds as args:

// since Elijah uses underscores instead of dashes, so will I

// 1. my_tweets

// 2. spotify_this_song <song name here>

// 3. movie_this <movie name here>

// 4. do_what_it_says


// ••••••••THE .ENV PKG √
// @ top of liri.js, add code to read & set environment vars w/ the dotenv pkg:
// .env is a PACKAGE - a pkg of environment vars
// These values are specific to the computer that node is running on
// and since we are gitignoring this file, they won't be pushed to github
// keeping our API key info private.
const node_env_file = require("node_env_file").config();


// ••••••••THE REQUEST PKG √
// a node app utilizes a module's functions
// a module utilizes a pkg's files
// inc a module via require() w/ the module's name.
// inc pkgs via the init & install cmnds
const request = require("request");


// ••••••••THE FILE SYSTEM MODULE √
// read/write files via the file system module via require():
const fs = require("fs");


// ••••••••API DATA KEYS √
// code required to import API data from keys.js & store it in a var:
// this is my API data??? - right?
const dataKeys = require('./keys.js');


// access the key's data from keys.js
// via require() or a constructor-class???


// ••••••••TWITTER API DATA √
// let twitter = require('twitter');
// NO - don't use reserved keyword 'let'
// 'let' declares vars that are limited in scope to the block, statement, or expression on which it is used. 'Var' defines a var globally, or locally to an entire function regardless of block scope.
var twitter = require('twitter');


// ••••••••TWITTER CLIENT √
// create a twitter client via a twitter constructor-class???
var twitterClient = new twitter(dataKeys.twitterKeys);


// ••••••••SPOTIFY API DATA √
var spotify = require('spotify');


// ••••••••USER'S COMMAND-ARGS √
// cmndArg needed for the switch statement
// switch statement processes the user's 4 cmndArgs
var cmndArg = process.argv[2];


// ••••••••USER'S MOVIE OR SONG TITLE ARGS
// movieOrSong is for multi word args such as:
// Stairway To Heaven or Gone With the Wind
// argv[3] represents only the 1st word, so...
// process.argv can hold an entire multi-word arg
var movieOrSong = process.argv;



// •••••••••LOOP-ITERATE THRU movieOrSong ARG √
// ?????? would this be ok?: var x;
// x will hold the movieOrSong arg
// x will be used in switch statement
var x = "";
// remember: "i" stands for "iterator", not "item"
for (var i = 3; i<movieOrSong.length; i++){
  if(i>3 && i<movieOrSong.length){
    x = x + "+" + movieOrSong[i];
  } else{
    x = x + movieOrSong[i];
  }
}


// ••••••••••SWITCH STATEMENT FOR THE 4 CMND-ARGS √
switch(cmndArg) {
// ----------
// if cmnd is this:
    case "my_tweets":
// call this function:
        showTweets();
    break;
// ----------
// if cmnd is this:
    case "spotify_this_song":
// do this:
        if(x){
            spotifySong(x);
        } else {
            spotifySong("Stairway To Heaven");
        }
    break;
// ----------
// if cmnd is this:
    case "movie_this":
// do this:
        if(x){
            omdbData(x)
        } else{
            omdbData("Plan Nine From Outer Space")
        }
    break;
// ----------
// if cmnd is this:
    case "do_what_it_says":
// call this function:
        doThing();
    break;
// ----------
// default keyword specifies code to run if there is no case match:
  default:
    console.log("{Please enter a command: my_tweets, spotify_this_song, movie_this, do_what_it_says}");
  break;
// end switch statement:
}




// •••••••••4 FUNCTION DEFINITIONS:
// showTweets()
// spotifySong()
// omdbMovieData()
// doThing()


// •••••••••showTweets() FUNCTION
function showTweets(){
// display last 20 tweets
  var screenName = {screen_name: 'ClauticeMichael'};
  client.get('statuses/user_timeline', screenName, function(error, tweets, response){
    if(!error){
      for(var i = 0; i<tweets.length; i++){
        var date = tweets[i].created_at;
        console.log("@ClauticeMichael: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        console.log("-----------------------");

        //adds text to log.txt file
        fs.appendFile('log.txt', "@?????????: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        fs.appendFile('log.txt', "-----------------------");
      }
    }else{
      console.log('Error occurred');
    }
  });
// end showTweets():
}



// •••••••••spotifySong() FUNCTION
function spotifySong(){
  spotify.search({ type: 'track', query: song}, function(error, data){
    if(!error){
      for(var i = 0; i < data.tracks.items.length; i++){
        var songData = data.tracks.items[i];
        //artist
        console.log("Artist: " + songData.artists[0].name);
        //song name
        console.log("Song: " + songData.name);
        //spotify preview link
        console.log("Preview URL: " + songData.preview_url);
        //album name
        console.log("Album: " + songData.album.name);
        console.log("-----------------------");

        //adds text to log.txt
        fs.appendFile('log.txt', songData.artists[0].name);
        fs.appendFile('log.txt', songData.name);
        fs.appendFile('log.txt', songData.preview_url);
        fs.appendFile('log.txt', songData.album.name);
        fs.appendFile('log.txt', "-----------------------");
      }
    } else{
      console.log('Error occurred.');
    }
  });
// end spotifySong():
}



// •••••••••omdbMovieData() FUNCTION
function omdbMovieData(){
var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';

  request(omdbURL, function (error, response, body){
    if(!error && response.statusCode == 200){
      var body = JSON.parse(body);

      console.log("Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      console.log("Rotten Tomatoes URL: " + body.tomatoURL);

      //adds text to log.txt
      fs.appendFile('log.txt', "Title: " + body.Title);
      fs.appendFile('log.txt', "Release Year: " + body.Year);
      fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating);
      fs.appendFile('log.txt', "Country: " + body.Country);
      fs.appendFile('log.txt', "Language: " + body.Language);
      fs.appendFile('log.txt', "Plot: " + body.Plot);
      fs.appendFile('log.txt', "Actors: " + body.Actors);
      fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
      fs.appendFile('log.txt', "Rotten Tomatoes URL: " + body.tomatoURL);

    } else{
      console.log('Error occurred.')
    }
    if(movie === "Plan Nine From Outer Space"){
      console.log("-----------------------");
      console.log("If you haven't watched 'Plan Nine From Outer Space,' then you should: http://www.imdb.com/title/???????????/");
      console.log("It's on Netflix!");

      //adds text to log.txt
      fs.appendFile('log.txt', "-----------------------");
      fs.appendFile('log.txt', "If you haven't watched 'Plan Nine From Outer Space,' then you should: http://www.imdb.com/title/???????????/");
      fs.appendFile('log.txt', "It's on Netflix!");
    }
  });
// end omdbMovieData():
}



// •••••••••doThing() FUNCTION
function doThing(){

fs.readFile('random.txt', "utf8", function(error, data){
    var txt = data.split(',');

    spotifySong(txt[1]);
  });

// end doThing():
}

console.log("••••••••••••••••••••••••••••••••••");
console.log("••••••••••••••••••••••••••••••••••");
console.log("••••••••••••••••••••••••••••••••••");



