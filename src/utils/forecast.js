const request = require("request")
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=74cdb8704fd16994e19c7205284da4ab&query=" + latitude + "," + longitude + "&units=f"

    request({ url: url, json: true }, (error, { body }) => {

        if (error) {
            callback("unable to connect to server", undefined)
        } else if (body.error) {
            callback("unable to connect", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' ferenhiet out. But it feels like ' + body.current.feelslike)
        }
    })

}

module.exports = forecast