const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Austin', (error, data) => {
  if (error) {
    return console.log('error: ', error);
  }
  forecast(data.latitude, data.longitude, (error, _forecastData) => {
    if (error) {
      return console.log('error: ', error);
    }

    console.log('Data: ', _forecastData);
  });
});
