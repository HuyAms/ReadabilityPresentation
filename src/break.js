const fetch = require('node-fetch');

var i = 180;

function startTimer() {

    var countdownTimer = setInterval(function() {

        console.log(i);
        i = i - 1;

        if (i % 5 === 0) {
            fetch("https://official-joke-api.appspot.com/jokes/random")
                .then(res => res.json())
                .then(data => {
                    console.log("😊 ", data.setup)
                    console.log("👉 ", data.punchline)
                });
        }

        if (i <= 0) {
            clearInterval(countdownTimer);
        }

    }, 1000);

}

startTimer();