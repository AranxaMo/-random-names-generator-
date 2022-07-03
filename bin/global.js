#!/usr/bin/env node
//Se va a jecutar dentro del sistema bash

//Variable que llama la función que exportamos
let random = require('../src/index.js'); 

//Ejecutamos la función
random.randomMsg();