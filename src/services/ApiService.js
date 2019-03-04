import { ALBUMS_URL, PHOTOS_URL } from '../constants/ApiConstants'

class ApiService {
  getAlbums = () => this.get(ALBUMS_URL)
	getPhotos = () => this.get(PHOTOS_URL)
  get = (url) =>
  		fetch(url, { method: 'get' })
      .then((response, error ) => {
      	if (response) {
      		return response.json()
        }
      	return error
      })
      .then(json => {
        if (json.error) {
          const errorMessage = json.message
            .split('')
            .reduce((acc, val, index) => {
              if (index === 0) {
                acc.push(val.toUpperCase())
                return acc
              }
              acc.push(val)
              return acc
            }, []).join('')
          throw new Error(
            JSON.stringify({
              errorCode: json.status,
              info: json.error,
              message: errorMessage || 'Error',
              status: json.status,
              timestamp: json.timestamp,
            })
          )
        }
        return json
      }, error => {
      	console.log(error.message)
        throw new Error(
          JSON.stringify({
            errorCode: error.status || 0,
            info: error.stack || 'Error',
            message: error.message || 'Error',
            status: error.status || 0,
            timestamp: +new Date(),
          })
        )
      })
}

const API = new ApiService()
export default API