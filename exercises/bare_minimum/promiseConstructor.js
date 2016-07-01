/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var promisifiedRead = Promise.promisify(fs.readFile);
  return promisifiedRead(filePath)
    .then(function(buffer) {
      return buffer.toString().split('\n')[0];
    }, function(err) {
      throw err;
    });
    // .then(function() {}, function(err) {});

  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var promisifiedRequest = Promise.promisify(request);
  return promisifiedRequest(url)
    .then(function(res, body) {
      return res.statusCode;
    }, function(err, res, body) {
      throw err;
    });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
