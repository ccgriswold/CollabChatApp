module.exports = {
   generateLink: function(weburl) {

      var networkends = ['.com', '.org', '.edu', '.gov', '.net', '.io'];
      var theString = weburl.split(' ');
      var inputPoten = '';
      var link = '';
      var nolink = '';
      var stringIt = 0;

      for (var i = 0; i < theString.length; i++) {
         for (var j = 0; j < networkends.length; j++) {
             if (theString[i].indexOf(networkends[j]) > -1) {
               inputPoten = theString[i];
               stringIt = i;
            }}}
      if (inputPoten === undefined) {
         nolink = weburl;
      } else {
         if (inputPoten.indexOf('http:') === 0) {
            link = '<a href="' + inputPoten + '" target="_blank">' + inputPoten + '</a>';
         } else if (inputPoten.indexOf('www.') === 0) {
            link = '<a href="http://' + inputPoten + '" target="_blank">' + inputPoten + '</a>';
         } else {
            link = '<a href="http://www.' + inputPoten + '" target="_blank">' + inputPoten + '</a>';
         }

         theString[stringIt] = link;
         for (var k = 0; k < theString.length; k++) {
            if (k === theString.length - 1) {
               nolink = nolink + theString[k];
            } else {
               nolink = nolink + theString[k] + ' ';
            }}}
      return nolink;
   }};
