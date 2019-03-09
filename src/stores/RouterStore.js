import { action, decorate, observable } from 'mobx'

class RouterStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.url = window.location.hash
    window.addEventListener( 'hashchange', ev => { 
      this.changeUrl(`${ev.target.location.hash}`)
    })
    this.changeUrl(`${window.location.hash}`)
  }

	changeUrl = pathname => {
	  this.url = `/${pathname}`
	}
}
decorate(RouterStore, {
  url: observable,
  changeUrl: action,
})

export default RouterStore