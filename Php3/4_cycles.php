<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$fav_films_list = ["11 друзей Оушена", "Афёра Томаса Крауна", "Марсианин"];
$FFL_lenght = count($fav_films_list);
$cur_index = 0;

while ($cur_index < $FFL_lenght-1) {
    print (\" . $fav_films_list[$cur_index]\" . ", ");
    $cur_index+=1;
}
?>