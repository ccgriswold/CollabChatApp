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
