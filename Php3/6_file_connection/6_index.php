<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Подключение файла php</title>
    </head>
    <body>
        <h3><i>
                <?php
                require ('./sub.php');
                print ("<br>А я - index.php!" . PHP_EOL);
                ?>
            </i>
        </h3>
    </body>
</html>
