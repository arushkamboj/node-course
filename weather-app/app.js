const request = require('request');

const url =
  'https://api.darksky.net/forecast/3693b2a0e64f63986c57be7350a1b5fd/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(
      response.body.daily.data[0].summary +
        ' It is currently ' +
        response.body.currently.temperature +
        ' degress out. There is a ' +
        response.body.currently.precipProbability +
        '% chance of rain.'
    );
  }
});

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJ1c2hrYW1ib2oiLCJhIjoiY2syemZoeHJhMDY0bTNjbDNuZ2NvNnJnbCJ9.FTicrCerGrl7x4vB9TcozQ';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.');
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});
