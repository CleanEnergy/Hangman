<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Hangman History</title>
        <?php include "_styles.php"?>
        <style>
            div.indicator {
                padding-left: 10px;
                margin-left: 20px;
            }
            div.indicator:hover{
                background-color: rgba(0, 0, 0, 0.05);
                cursor: default;
            }
            .success{
                border-left: 5px solid lime;
            }
            .fail{
                border-left: 5px solid red;
            }
        </style>
    </head>
    <body>
        <?php include "menu.php"?>
                
        <div id="history">
        </div>

        <?php include "_scripts.php"?>
        <script src="../scripts/history.js"></script>
    </body>
</html>
