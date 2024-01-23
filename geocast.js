const request = require('request')
var latitude;
var longitude ;
const  geocast = function(address){

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoicml5YWRrYWltIiwiYSI6ImNrcWlzaDJpajAyNHQydnAzbG41cXV4d3cifQ.izlSFmsK9N9rQz6HVuqC-g'

request({ url: geocodeURL, json: true }, (error, response) => {
    latitude = response.body.features[0].center[0]
    longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})


} 
// module.exports = geocast
module.exports = {
    lata: latitude,
    longi:longitude
} 


