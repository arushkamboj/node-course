const request = require('request');
const url =
  'https://api.darksky.net/forecast/3693b2a0e64f63986c57be7350a1b5fd/37.8267,-122.4233';

request(
  {
    url: url,
    json: true
  },
  (error, response) => {
    const data = response.body;
    console.log(data.currently);
  }
);
