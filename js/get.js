module.exports = function newMessage(){
  var get = document.getElementById('newMessage');
  function getMessage() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    document.getElementById('display-messages').innerHTML = '';
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].user, data[i].message, data[i].when);
        var serverPostTime = document.createElement('p');
        var serverUser = document.createElement('h4');
        var serverMessage = document.createElement('p');
        var display = document.getElementById("display-messages");
        new Date(serverPostTime);
        serverPostTime.textContent= data[i].when;
        serverUser.textContent = data[i].user;
        serverMessage.textContent = data[i].message;
        console.log(serverUser, serverMessage);
        display.appendChild(serverPostTime);
        display.appendChild(serverUser);
        display.appendChild(serverMessage);
      }
    };
    request.send();
  }
  console.log('HEY');
  //Pull what you want, and produce that - username and message, and time stamp.
  getMessage();
};
