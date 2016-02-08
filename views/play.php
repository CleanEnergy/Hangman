<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Play Hangman</title>
        <?php include "_styles.php"?>
    </head>
    <body>
        <?php include "menu.php"?>

        <h3 id="remainingTries"style="text-align: center;"></h3>
        <ul id="letterInputs" style="list-style-type: none; text-align: center;">
        </ul>

        <?php include "_scripts.php"?>
        <script src="../scripts/play.js"></script>
    </body>
</html>
