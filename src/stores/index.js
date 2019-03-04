import AlbumsStore from './AlbumsStore'
import PhotosStore from './PhotosStore'
class RootStore {
  constructor() {
    this.userStore = new AlbumsStore(this)
    this.todoStore = new PhotosStore(this)
  }
}

export default RootStore