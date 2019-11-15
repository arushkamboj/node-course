const request = require('request');
const url =
  'https://api.darksky.net/forecast/3693b2a0e64f63986c57be7350a1b5fd/37.8267,-122.4233';

request(
  {
    url: url,
    json: true
  },
  (error, response) => {
    if (error) {
      console.log('Unable to connect to the weather service!');
    } else {
      const data = response.body;
      console.log(data.currently);
    }
  }
);

// const geoURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJ1c2hrYW1ib2oiLCJhIjoiY2syemZoeHJhMDY0bTNjbDNuZ2NvNnJnbCJ9.FTicrCerGrl7x4vB9TcozQ';
// request({ url: geoURL, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1];
//   const longitude = response.body.features[0].center[0];

//   console.log(latitude, longitude);
// });
