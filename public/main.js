$(function() {

    // Handles
    var $tweetDiv = $('#tweet-div');

    // Socket
    var socket = io();

    // Events
    socket.on('new message', function (data) {
        // console.debug('tweet', data.message);
        var $tweet = $('<h1>', {
            class : "tweet-h1",
            css: {'color': '#' + Math.floor(Math.random()*16777215).toString(16)},
            html: data.message
        }); // tweet h1

        $tweet.html(data.message).appendTo($tweetDiv);

    });

    setInterval(function(){
        $tweetDiv.html('<h1 class="tweet-h1">#nomoreguns</h1>');
    }, 60000);

});
