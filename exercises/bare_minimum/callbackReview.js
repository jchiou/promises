/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
 fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
       cb(err, null);
    } else {
      console.log('data is', data);
       cb(null, data.split('\n')[0]);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (filePath, cb) {
  request(filePath, function (err, res, body) {
    if (err) {
      return cb(err, null);
    }
    return cb(null, res.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
