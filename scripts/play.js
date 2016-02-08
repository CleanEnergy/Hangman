var attempt = {};

var triesLeft = 5;
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

    $('#remainingTries')
        .html(triesLeft + ' tries left');

    attempt = {
        time: new Date().toLocaleDateString(),
        word: selectRandomWord(),
        tries: 0,
        foundLetters: 0,
        won: function () { return this.foundLetters == this.word.length; }
    };

    displayLetterInputs();

    function displayLetterInputs() {
        var $placeholder = $('#letterInputs');

        // Display
        for (var i = 0; i < attempt.word.length; i++) {
            if (attempt.word[i] == ' ') {
                continue;
            }

            $placeholder
                .append('<li><input type="text" style="text-align:center;" data-index="' + i + '"/></li>');
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
                } else {

                    // Victory
                    if (attempt.won()) {
                        alert('Victory!');
                        saveResults();
                        window.location = '/views/history.php';
                    }

                    // Incorrect letter
                    if (triesLeft === 0) {
                        alert('Game over!');
                        saveResults();
                        window.location = '/views/history.php';
                    }
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

        history.push(attempt);
        localStorage.setItem('history', JSON.stringify(history));
    }

});