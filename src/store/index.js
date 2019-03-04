import { observable, action, decorate  } from 'mobx'

class AppStore {
  photos = { albums: [] };
  isLoading = false;
  isValid = false;
  albumId = null;
  album = null;
  searchResult: null;
  
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
    })
  }

  search = word => {
    if (word.length <= 2) {
      this.searchResult = null
      return 
    }
    const result = this.photos.albums.reduce((acc, val) => {
      const data = val.photos.reduce((accumulator, value) => {
        if(value.title.includes(word)) {
          accumulator.push(value)
          return accumulator
        }
        return accumulator
      }, [])
      return {...acc, photos: [ ...acc.photos, ...data ]}
    }, {searchId: +new Date(), photos: []})
    this.searchResult = result
  }

  setAlbumId = id => {
    this.albumId = id
    this.searchResult = null
    this.album = this.photos.albums.filter(album => album.id === id)[0]
  }
}
decorate(AppStore, {
    searchResult: observable,
    albumId: observable,
    album: observable,
    isValid: observable,
    photos: observable,
    isLoading: observable,
    fetchData: action,
    search: action
})

const appStore = new AppStore()

export default appStore
export { appStore }