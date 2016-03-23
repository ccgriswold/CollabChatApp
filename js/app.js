/*Begin coding*/
/* jslint browser: true */
//var chai = require('chai');     // importing things with npm

var newMessage = require('./get'); // importing local modules
var submit = require('./send'); // importing local modules

window.addEventListener('load', function () {

    document.getElementById('newMessage').addEventListener('click', newMessage);
    document.getElementById('submit').addEventListener('click', submit);
});
