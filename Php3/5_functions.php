<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function is_leap_year($year) {
    if ($year % 4 != 0) {
        return false;
    }
    elseif ($year % 100 == 0) {
        if ($year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

if (is_leap_year((int)$_POST['year'])) {
    print("{$_POST['year']} год - високосный");
}
 else {
    print("{$_POST['year']} год - простой");
}
?>