import {
  action,
  decorate,
  observable,
  runInAction
} from 'mobx'

import API from '../services/ApiService'

class AlbumsStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.albums = []
    this.albumId = null
    this.isLoading = false
    this.error = null
  }

  fetchAlbums = () => {
    this.isLoading = true
    API.getAlbums()
      .then(json => runInAction(() => {
        this.isLoading = false
        this.albums = json
      }))
      .catch(error => runInAction(() => {
        this.isLoading = false
        this.error = error
      }))
  }

  setAlbumId = id => {
    this.albumId = id
  }
}
decorate(AlbumsStore, {
  albums: observable,
  albumId: observable,
  isLoading: observable,
  fetchAlbums: action,
})

export default AlbumsStore