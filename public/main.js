$(function() {

    // Handles
    var $tweetDiv = $('#tweet-div');
    var $tweet = $({
        class="tweet-h1"
    }); // tweet h1

    // Socket
    var socket = io();

    // Events
    socket.on('new message', function (data) {
        // console.debug('tweet', data.message);
        $tweet.html(data.message);
        $tweetDiv.append($tweet);
    });


});
