import { observable, action, decorate  } from 'mobx'

class AppStore {
  photos = [];
  part = [];
  iteration = 0;
  isLoading = false;
  fetchData = () => {
    this.isLoading = true
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(result => {
      action(() => {
        this.photos = result
        this.isLoading = false
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
    part: observable,
    photos: observable,
    isLoading: observable,
    fetchData: action,
    getPart: action,
})

const appStore = new AppStore()

export default appStore
export { appStore }