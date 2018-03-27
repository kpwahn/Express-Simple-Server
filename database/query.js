let connection = require('./connection');

let query = function(sqlStatement, queryValues = []) {
  return new Promise((resolve, reject) => {
    connection.query(sqlStatement, queryValues, function (error, results) {
      if (error) reject(error);

      resolve(results);
    });
  });
}

module.exports = query;
