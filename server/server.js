/*
 * SERVER
 */
(function () {
  "use strict";

  var path = require('path')
    , fs = require('fs')
    , mkdirp = require('mkdirp')
    , connect = require('connect')
    , http = require('request')
    , app = connect.createServer()
    , counterPath = path.join(__dirname, '..', 'var')
    , counterFile = path.join(counterPath, 'count.db')
    ;

  // This tests that files and directories can be created
  function getCount(request, response) {
    mkdirp(counterPath, function (mkdirErr) {
      fs.readFile(counterFile, 'utf8', function (err, data) {
        var count = Number(data) || 0;
        count += 1;
        fs.writeFile(counterFile, String(count), 'utf8', function (err) {
          http.get('http://www.yahoo.com/robots.txt', function (err3, r, data) {
            response.setHeader('Content-Type', 'application/json; charset=utf8');
            response.write(JSON.stringify(
              { error: mkdirErr || err, count: data && count, hasInternet: !!data }
            ));
            response.end();
          });
        });
      });
    });
  }

  app
    .use(connect.favicon())
    .use(connect.static(path.join(__dirname, '..', 'public')))
    .use(getCount)
    ;

  module.exports = app;
}());
