//carrythenews
//https://en.wikipedia.org/wiki/All_the_Young_Dudes

var Twitter = require('twitter');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;


// Twitter client
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Tweet stream
client.stream('statuses/filter', {track: 'gun control'}, function(stream) {
  stream.on('data', function(tweet) {
      io.sockets.emit('new message', {
        username: 'newsguy',
        message: tweet.text
      });
      console.log(tweet.text);
  });

  stream.on('error', function(error) {
    throw error;
  });
});


// Server
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Socket connection
io.on('connection', function (socket) {
    console.log('socket connection');
});
