<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Hangman</title>
        <?php include "_styles.php"?>
    </head>
    <body>
        <?php include "menu.php"?>
        <div class="container">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Add a word..." id="addWordTb">
              <span class="input-group-btn">
                <button class="btn btn-default" id="addWordBtn"><span class="glyphicon glyphicon-plus"></span></button>
              </span>
            </div>

            <h3>Existing words</h3>
            <hr/>
            <ul id="existingWords"></ul>
        </div>

        <?php include "_scripts.php"?>
        <script src="../scripts/index.js"></script>

    </body>
</html>
