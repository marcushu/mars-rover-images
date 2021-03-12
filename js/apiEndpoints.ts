import apiKey from './apiKey';
//const apiKey = process.env.NASA_API_KEY;
// Heroku


export const curiosithyManifest = `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${apiKey}`

export const spiritManifest = `https://api.nasa.gov/mars-photos/api/v1/manifests/spirit?api_key=${apiKey}`

export const opportunityManifest = `https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity?api_key=${apiKey}`