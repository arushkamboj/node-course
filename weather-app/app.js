const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Austin', (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log('error: ', error);
  }

  forecast(latitude, longitude, (error, _forecastData) => {
    if (error) {
      return console.log('error: ', error);
    }

    console.log('Data: ', location, _forecastData);
  });
});
