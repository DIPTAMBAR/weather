const request = require('request');
const forecast = require('./forecast');

const geocode = (address, callback) => {
    const url = "http://api.openweathermap.org/geo/1.0/direct?q=" + encodeURIComponent(address) + "&limit=1&appid=9810c938e7e7cd94a9de10e1342b627a"

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location: body[0].name
            })
        }
    })

}

module.exports = geocode