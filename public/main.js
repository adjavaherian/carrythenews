$(function() {

    // Handles
    var $tweetDiv = $('#tweet-div');

    // Socket
    var socket = io();

    // Events
    socket.on('new message', function (data) {
        // console.debug('tweet', data.message);
        var $tweet = $('<h1>', {
            class : "tweet-h1"
        }); // tweet h1

        $tweet.html(data.message).css({'color': '#'+Math.floor(Math.random()*16777215).toString(16)}).appendTo($tweetDiv);

    });


});
