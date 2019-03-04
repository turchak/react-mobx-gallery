import { observable, action, decorate  } from 'mobx'
import API from '../services/ApiService'

class AlbumsStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.albums = null
    this.isLoading = false
  }

  fetchAlbums = () => {
    this.isLoading = true

    API.getAlbums()
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
decorate(AlbumsStore, {
  albums: observable,
  isLoading: observable,
  fetchAlbums: action,
})

export default AlbumsStore