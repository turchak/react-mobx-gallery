import { observable, action, decorate, runInAction  } from 'mobx'
import API from '../services/ApiService'

class PhotosStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.photos = []
    this.isLoading = false
  }

	fetchPhotos = () => {
	  this.isLoading = true

	  API.getPhotos()
	    .then(json => 
	      runInAction(() => {
	        this.isLoading = false
	        this.photos = json
	      })
	    )
	    .catch(error => 
	      runInAction(() => {
	        this.isLoading = false
	        this.error = error
	      })
	    )
	}
}
decorate(PhotosStore, {
  photos: observable,
  isLoading: observable,
  fetchAlbums: action,
})

export default PhotosStore