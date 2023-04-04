// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict";
/**

This function converts fahrenheit to celsius
*/
function calculatetemp() {
// calculations of fahrenheit to celsius

let fahrenheit = parseFloat(document.getElementById("f-temp").value);

// converting fahrenheit to celsius
let celsius = (5/9) * (fahrenheit - 32);

// display the temperature in celsius
document.getElementById("calc").innerHTML = "The temperature in celsius is: " + celsius.toFixed(1) + " C°.";
}