'use strict'

const main = document.querySelector('.main');

const auth = '681928850387958142167x48435';
///// Part 1
// 1. Create a function 'whereAmI' which takes inputs (lat, lng)
// 2. Do 'reverse gecoding' of the provided coordinates.
//      reverse geocoding - converting coordinates to a meaningful location (etc. city, country)
//      AJAX call will be done to a url with this format:
//      https://geocode.xyz/52.508,13.381?geoit=json
//      Use the fetch API and promises to get the data.
// 3. Using the data, log a message to the console: 'You are in ${location}'
// 4. Chain a .catch method to the end of the promise to log errors to the console
// 5. This API only allows 3 req/s Create an error to hanle a 403

const whereAmI = (lat,lng) => {
    // if (Array.isArray(lat)){
    //     lng = lat[1];
    //     [lat] = lat;
    // }
    console.log(`Attempting to reverse geocode with: ${lat}, ${lng}`)
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${auth}`)
        .catch(err => console.error(`${err.message}`))
        .then(res => {
            console.log(res.status);
            if (res.status === '403') throw new Error('THIS API ONLY ALLOWS 3 requests per second!');
            return res.json();  // remember .json() method returns a promise
            })
            .then(data => console.log(`You are in ${data.city}, ${data.country}!`))
}


const getPosition = () => {
    if (!navigator.geolocation) return console.error('enable geolocation!');

    navigator.geolocation.getCurrentPosition(data => {
        const {coords} = data;
        console.log(`${coords}`);
        const {latitude} = coords;
        const {longitude} = coords;
        console.log(`Coords after destructure: ${latitude}, ${longitude}`)
        // return [latitude, longitude];

        whereAmI(latitude.toFixed(2), longitude.toFixed(2));
    })

}

console.log('index.js here');

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933,18.474);

///////////////////////////
// PART 2
// 6. Render a country based on the received data. 