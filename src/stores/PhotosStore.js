import {
  action,
  decorate,
  observable,
  runInAction
} from 'mobx'

import { API } from '../services/ApiService'

class PhotosStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.photos = []
    this.isLoading = false
    this.selectedPhotos = []
    this.searchResults = []
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

	getPhotos = id => {
	  console.log('TCL: PhotosStore -> id', id)
	  this.selectedPhotos = []

	  console.log('TCL: PhotosStore -> isLoading', this.isLoading)
	  if (id && !this.isLoading) {
	    this.isLoading = true
	    
	    const sortedPhotos = this.photos.reduce((acc, val) => {
				
	      if (val.albumId === Number(id)) {
	        acc.push(val)
	        return acc
	      }
	      return acc
	    }, [])
	    console.log('TCL: PhotosStore -> sortedPhotos', sortedPhotos)
	    const promise = new Promise((resolve, reject) => {
	      let images = 0
	      sortedPhotos.map(photo => {
	        const img = new Image(150, 150)
	        img.src = photo.thumbnailUrl
	        img.onload = () => {
	          images++
	          if (sortedPhotos.length === images) {
							
	            resolve(sortedPhotos)
	          }
	        }
	        return photo
	      })
	    })
	    promise.then(photos => {
	      runInAction(() => {
	        console.log('TCL: PhotosStore -> this.isLoading', this.isLoading)
	        if(!this.isLoading) {
	          this.selectedPhotos = []
	          return 
	        }
	        this.isLoading = false
	        this.selectedPhotos = photos
	      })
	    })
	  }
	}

	getSearchResults = name => {
	  this.results = this.photos.filter(el => el.title.includes(name))
	}

}
decorate(PhotosStore, {
  photos: observable,
  isLoading: observable,
  selectedPhotos: observable,
  fetchAlbums: action,
  getPhotos: action,
  getSearchResults: action,
})

export default PhotosStore