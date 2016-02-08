$(function () {

    // Storage check
    if (typeof (Storage) === 'undefined') {
        alert('No local storage detected!');
        return;
    }

    // Read storage
    var $existingWordsList = $('#existingWords');
    var existingWords = JSON.parse(localStorage.getItem('existingWords'));

    if (existingWords === null) {
        localStorage.setItem('existingWords', JSON.stringify([]));
        existingWords = [];
    }

    // Init UI
    if (existingWords.length == 0) {
        $existingWordsList
            .append('<li>No words have been entered yet.</li>');
    } else {
        displayWords(existingWords);
    }

    // Bind events
    $('#addWordBtn')
        .click(function () {
            var newWord = 
                $('#addWordTb')
                    .val();

            $('#addWordTb')
                .val('');

            storeWord(newWord);
            displayWords(existingWords);
        });


    function storeWord(word) {
        existingWords.push(word);
        localStorage.setItem('existingWords', JSON.stringify(existingWords));
    }

    function displayWords(words) {
        $existingWordsList
            .html('');
        for (var i = 0; i < words.length; i++) {
            $existingWordsList
                .append('<li>' + words[i] + '</li>');
        }
    }
});