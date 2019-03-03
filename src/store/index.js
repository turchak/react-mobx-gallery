import { observable, action, decorate  } from 'mobx'
import { normalize, schema } from 'normalizr'

class AppStore {
  photos = { albums: [] };
  part = [];
  iteration = 0;
  isLoading = false;
  isValid = false;
  
  fetchData = () => {
    this.isLoading = true
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(result => {
      console.log(result)
      action(() => {
        // Define a users schema
        const json = result.reduce((acc, val) => {
          if(!acc.albums.length) {
            acc.albums.push({ id: val.albumId })
            acc.albums[ acc.albums.length-1 ].photos = []
          }
          if (acc.albums[ acc.albums.length-1 ].id !== val.albumId) {
            acc.albums.push({ id: val.albumId })
            acc.albums[ acc.albums.length-1 ].photos = []
          }
          acc.albums[ acc.albums.length-1 ].photos.push({ id: val.id, url: val.url,  title: val.title, thumbnailUrl: val.thumbnailUrl })
          return acc
        }, {
          albums: []
        })
        console.log(json)
        this.photos = json
        this.isLoading = false
        this.isValid = true
      })()
      
    }).catch(e => {
      console.log(e)
    })
  }

  getPart = (a, value) => {
    this.part = this.photos.slice(a, value)
  }
}
decorate(AppStore, {
    iteration: observable,
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