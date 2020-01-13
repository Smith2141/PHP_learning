<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Тестируем PHP</title>
    </head>
    <body>
        <h3><i>
                <p>Здравствуйте, 
                <?php
                echo htmlspecialchars($_POST['name']);
                ?>!</p>
                <p>Вам <?php echo (int)$_POST['age']; ?> лет.</p>
        </i></h3>
    </body>
</html>
