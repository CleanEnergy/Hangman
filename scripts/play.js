var attempt = {};

var triesLeft = 0;
function decrementTries() {
    triesLeft--;
    $('#remainingTries')
        .html(triesLeft + ' tries left');
}

$(function () {

    // Storage check
    if (typeof (Storage) === 'undefined') {
        alert('No local storage detected!');
        return;
    }

    // Read storage
    var existingWords = JSON.parse(localStorage.getItem('existingWords'));
    if (existingWords === null ||
        existingWords.length === 0) {
        alert('Add some words first!');
        window.location = '/views/index.php';
    }

    attempt = {
        time: new Date().toLocaleString(),
        word: selectRandomWord(),
        tries: 0,
        foundLetters: 0,
        victory: false,
        won: function () { return this.foundLetters == (this.word.replace(' ', '').length); }
    };

    triesLeft = attempt.word.length + 5;
    $('#remainingTries')
        .html(triesLeft + ' tries left');

    displayLetterInputs();

    function displayLetterInputs() {
        var $placeholder = $('#letterInputs');

        // Display
        for (var i = 0; i < attempt.word.length; i++) {
            if (attempt.word[i] == ' ') {
                $placeholder
                    .append('<li><input type="text" class="input" style="text-align:center; margin-bottom: 5px;" disabled/></li>');
            } else {
                $placeholder
                   .append('<li><input type="text" class="input" style="text-align:center; margin-bottom: 5px;" data-index="' + i + '"/></li>');
            }
        }

        // Bind logic
        $('input', $placeholder)
            .change(function () {
                var index = $(this).data('index');
                var value = $(this).val();

                attempt.tries++;
                decrementTries();

                // Correct letter
                if (attempt.word[index] === value) {
                    attempt.foundLetters++;
                    $(this)
                        .css('background-color', 'lime')
                        .attr('disabled', true);
                }

                if (attempt.won()) {
                    // Victory
                    alert('Victory!');
                    saveResults();
                    window.location = '/views/history.php';
                } else if (triesLeft === 0) {
                    // Incorrect letter
                    alert('Game over!');
                    saveResults();
                    window.location = '/views/history.php';
                }


            });
    }

    function selectRandomWord() {
        var words = JSON.parse(localStorage.existingWords);
        return words[parseInt(Math.random() * words.length)];
    }

    function saveResults() {
        var history = localStorage.getItem('history');
        if (history === null) {
            history = [];
        } else {
            history = JSON.parse(history);
        }

        attempt.victory = attempt.won();
        history.push(attempt);
        localStorage.setItem('history', JSON.stringify(history));
    }

});