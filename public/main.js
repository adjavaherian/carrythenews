$(function() {

    // Handles
    var $tweetDiv = $('#tweet-div');
    var $tweet = $('<h1>', {
        class : "tweet-h1"
    }); // tweet h1

    // Socket
    var socket = io();

    // Events
    socket.on('new message', function (data) {
        // console.debug('tweet', data.message);
        $tweet.html(data.message).css({'color': '#'+Math.floor(Math.random()*16777215).toString(16)}).appendTo($tweetDiv);

    });


});
