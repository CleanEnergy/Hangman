$(function () {

    // Storage check
    if (typeof (Storage) === 'undefined') {
        alert('No local storage detected!');
        return;
    }

    // Read storage
    var $historyList = $('#history');
    var history = JSON.parse(localStorage.getItem('history'));

    if (history === null ||
        history.length === 0) {
        $historyList
            .append('<li>No games played yet.</li>');
    } else {

        for (var i = 0; i < history.length; i++) {
            displayHistoryItem(history[i]);
        }
    }

    function displayHistoryItem(item) {

        var itemClass = item.victory ? 'indicator success' : 'indicator fail';

        $historyList
            .append('\
            <div class="' + itemClass + '">\
                <dl class="dl-horizontal">\
                    <dt>Time played: </dt><dd>' + item.time + '</dd>\
                    <dt>Word: </dt><dd>' + item.word + '</dd>\
                    <dt>Tries: </dt><dd>' + item.tries + '</dd>\
                    <dt>Found letters: </dt><dd>' + item.foundLetters + '</dd>\
                </dl>\
            </div>\
        ');
    }
});