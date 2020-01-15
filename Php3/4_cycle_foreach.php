<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$user = [
    'Имя' => 'Евгений',
    'Возраст' => '27',
    'Род занятий' => 'Программист'
];

foreach ($user as $key => $value) {
    print("$key: $value<br>");
    //print("$value<br>");
}
?>