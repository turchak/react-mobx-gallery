import { observable, action, decorate  } from 'mobx'
import API from '../services/ApiService'

class PhotosStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }
	albums = null;
	isLoading = false;

	fetchPhotos = () => {
	  this.isLoading = true

	  API.getPhotos()
	    .then(json => {
	      action(() => {
	        this.isLoading = false
	        this.albums = json
	      })()
	    })
	    .catch(error => {
	      action(() => {
	        this.isLoading = false
	        this.error = error
	      })
	    })
	}
}
decorate(PhotosStore, {
  albums: observable,
  isLoading: observable,
  fetchAlbums: action,
})

export default PhotosStore