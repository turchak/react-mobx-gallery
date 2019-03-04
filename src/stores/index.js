import AlbumsStore from './AlbumsStore'
import PhotosStore from './PhotosStore'
import RouterStore from './RouterStore'
class RootStore {
  constructor() {
    this.albumsStore = new AlbumsStore(this)
    this.photosStore = new PhotosStore(this)
    this.routerStore = new RouterStore(this)
  }
}

export default RootStore