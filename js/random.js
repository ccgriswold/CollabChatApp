module.exports = function getRandom(message, callback) {
  var requestRandom = new XMLHttpRequest();
  requestRandom.open('GET', 'https://randomuser.me/api/');
  requestRandom.onload = function() {
    var response1 = JSON.parse(requestRandom.responseText);
    callback(response1, message);
  };
  requestRandom.send();
};