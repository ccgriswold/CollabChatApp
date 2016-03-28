module.exports = function newMessage(){
  var moment = require('moment');

  var display = document.getElementById("display-messages");

  function getMessage() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    document.getElementById('display-messages').innerHTML = '';
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].user, data[i].message, data[i].when);

        var messageBlock = document.createElement('ul');
        var serverPostTime = document.createElement('small');
        var serverUser = document.createElement('h4');
        var serverMessage = document.createElement('p');

        serverPostTime.textContent= moment(data[i].when).format('dddd, h:mm MMMM Do YY');
        serverUser.textContent = data[i].user;
        serverMessage.textContent = data[i].message;

        console.log('Loaded up');

        messageBlock.appendChild(serverPostTime);
        messageBlock.appendChild(serverUser);
        messageBlock.appendChild(serverMessage);
        display.appendChild(messageBlock);

    }
      display.scrollTop = display.scrollHeight;
    };
    request.send();


  }
  console.log('HEY');

  //Pull what you want, and produce that - username and message, and time stamp.
  getMessage();
  // Sets message pulls to 2 second intervals
setInterval(getMessage, 20000);

};
