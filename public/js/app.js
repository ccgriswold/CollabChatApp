(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*Begin coding*/
/* jslint browser: true */
//var chai = require('chai');     // importing things with npm

var newMessage = require('./get'); // importing local modules
var submit = require('./send'); // importing local modules

window.addEventListener('load', function () {

    document.getElementById('newMessage').addEventListener('click', newMessage);
    document.getElementById('submit').addEventListener('click', submit);
});

},{"./get":2,"./send":3}],2:[function(require,module,exports){
module.exports = function newMessage(){
  var get = document.getElementById('newMessage');
  get.addEventListener('click', function() {
  function getMessage() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    document.getElementById('display-messages').innerHTML = '';
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].user, data[i].message);
        var serverUser = document.createElement('h4');
        var serverMessage = document.createElement('p');
        var display = document.getElementById("display-messages");
        serverUser.textContent = data[i].user;
        serverMessage.textContent = data[i].message;
        console.log(serverUser, serverMessage);
        display.appendChild(serverUser);
        display.appendChild(serverMessage);
      }
    };
    request.send();
  }
  console.log('HEY');
  //Pull what you want, and produce that - username and message, and time stamp.
  getMessage();
});
};

},{}],3:[function(require,module,exports){
module.exports = function submit(){
  var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var message = document.getElementById('newMessage').value;
  //Print that up.
  console.log(username, message);

  function loadDoc(username, message) {
    var request = new XMLHttpRequest();
    request.open('POST', 'http://chat.queencityiron.com/messages');
    request.send(JSON.stringify({
      name: username,
      message: message,
    }));
  }
  loadDoc(username, message);
});
};

},{}]},{},[1])