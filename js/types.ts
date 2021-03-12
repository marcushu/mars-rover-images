export interface roverData {
  roverName: string
  launchDate: string
  landingDate: string
  overview: string
  imageName: string
  lastSol: number
  lastDate: string
  totalPhotos: number
  nasaHref: string
}

export interface photoData {
  sol: number
  earth_date: string
  total_photos: number
  cameras: string[]
}

// as returned by the api
export interface imageData {
  id: number
  sol: number
  camera: {
    id: number
    name: string
    rover_id: number
    full_name: string
  },
  img_src: string
  earth_date: string
  rover: {
    id: number
    name: string
    landing_date: string
    launch_date: string
    status: string
  }
}