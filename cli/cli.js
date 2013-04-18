(function () {
  "use strict";

  var port = process.argv[2] || 5566
    , request = require('request')
    ;

  request.get('http://localhost:' + port + '/count', function (err, req, data) {
    console.log('Hello World!', JSON.parse(data).count);
  });
}());
