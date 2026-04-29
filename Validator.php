<?php

class Validator {

    public static function string($value, $min = 1, $max = 255) {
        $value = trim($value);
        return strlen($value) >= $min && strlen($value) <= $max;
    }

    public static function email($value) {
        return filter_var($value, FILTER_VALIDATE_EMAIL);
    }
    
    public static function number($string) {
        $string = preg_replace('/[()\s-]/', '', $string);
    return preg_match('/^(?:0\d{10}|\+44\d{10})$/', $string) === 1;
    }

}

?>