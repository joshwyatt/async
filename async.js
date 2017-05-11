let rp = require('request-promise');
let request = require('request');

const URL = 'https://newton.now.sh/simplify/2%12';

request(URL, (err, response, body) => {
  console.log(JSON.parse(body).result);
});
