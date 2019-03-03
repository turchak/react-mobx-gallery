import { observable, action, decorate, toJS  } from 'mobx'
import { normalize, schema } from 'normalizr'

class AppStore {
  photos = { albums: [] };
  part = [];
  iteration = 0;
  isLoading = false;
  isValid = false;
  albumId = null;
  album = null;
  
  fetchData = () => {
    this.isLoading = true
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => {
      action(() => {
        this.photos = json.reduce((acc, val) => {
          if(!acc.albums.length) {
            acc.albums.push({ id: val.albumId })
            acc.albums[acc.albums.length-1].photos = []
          }
          if (acc.albums[acc.albums.length-1].id !== val.albumId) {
            acc.albums.push({ id: val.albumId })
            acc.albums[acc.albums.length-1].photos = []
          }
          acc.albums[acc.albums.length-1].photos.push({ id: val.id, url: val.url,  title: val.title, thumbnailUrl: val.thumbnailUrl })
          return acc
        }, {
          albums: []
        })
        this.isLoading = false
        this.isValid = true
      })()
      
    }).catch(e => {
      this.isLoading = false
      console.log(e)
    })
  }

  setAlbumId = id => {
    this.albumId = id
    this.album = this.photos.albums.filter(album => album.id === id)[0]
  }

  getPart = (a, value) => {
    this.part = this.photos.slice(a, value)
  }
}
decorate(AppStore, {
    iteration: observable,
    albumId: observable,
    album: observable,
    isValid: observable,
    part: observable,
    photos: observable,
    isLoading: observable,
    fetchData: action,
    getPart: action,
})

const appStore = new AppStore()

export default appStore
export { appStore }