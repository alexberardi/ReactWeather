var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appID=6d3cc3a632aaa6c93edd758ea9f36de9&units=imperial';

module.exports = {
    getTemp: function (location) {
            var encodedLocation = encodeURIComponent(location);
            var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

            return axios.get(requestUrl).then(function(res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(err.response.data.message);
                } else {
                    return res.data.main.temp;
                }
            }, function(err) {
                throw new Error(err.response.data.message);
            })
        }
}