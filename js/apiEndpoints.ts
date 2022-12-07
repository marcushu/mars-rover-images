//const theKey = 'QjjebeezAuxKRjHYTHMe1YG2OEd98haah1gnr5sZ'
const theKey = process.env.NASA_KEY

export const curiosithyManifest = "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=" + theKey;

export const spiritManifest = "https://api.nasa.gov/mars-photos/api/v1/manifests/spirit?api_key=" +  theKey;

export const opportunityManifest = "https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity?api_key=" + theKey;
