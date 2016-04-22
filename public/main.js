$(function() {

    // Handles
    var $tweet = $('.tweet-h1'); // tweet h1

    // Socket
    var socket = io();

    // Events
    socket.on('new message', function (data) {
        console.debug('tweet', data.message);
        $tweet.text(data.message);
    });


});