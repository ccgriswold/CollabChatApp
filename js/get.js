module.exports = function newMessage() {
  var moment = require('moment');
  var random2 = require('./random');
  var weblink = require('./messagelink');
  var display = document.getElementById('display-messages');


  function getMessage() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    document.getElementById('display-messages').innerHTML = '';
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      for (var i = 0; i < data.length; i++) {
        random2(data[i], function(info, message) {
          console.log(info.results[0].user.picture.medium);
          var pic = document.createElement('img');
          pic.src = info.results[0].user.picture.medium;

          var serverPostTime = document.createElement('small');
          var serverUser = document.createElement('h4');
          var serverMessage = document.createElement('p');

          serverPostTime.textContent = moment(message.when).format('dddd, h:mm MMMM Do YY');
          serverUser.textContent = message.user;
          serverMessage.innerHTML= weblink.generateLink(data[i].message);
          serverMessage.textContent = message.message;

          display.appendChild(serverPostTime);
          display.appendChild(serverUser);
          display.appendChild(pic);
          display.appendChild(serverMessage);

        });
        console.log(data[i].user, data[i].message, data[i].when);
      }
      display.scrollTop = display.scrollHeight;

    };

    request.send();
  }

  console.log('HEY');

  //Pull what you want, and produce that - username and message, and time stamp.
  getMessage();
  setInterval(getMessage, 30000);

};
