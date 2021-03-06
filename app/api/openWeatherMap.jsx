var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=5e0083b61b1de6a80285c82bc85f0b85&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error('Unable to fetch weather.');
      }
      else{
        return res.data.main.temp;
      }
    },function(res){
      throw new Error('Unable to fetch weather.');
    })
  }
}
