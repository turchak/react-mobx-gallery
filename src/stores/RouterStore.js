import { action, decorate, observable } from 'mobx'

class RouterStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.url = window.location.hash
    window.addEventListener( 'hashchange', ev => { 
      this.changeUrl(`${ev.target.location.hash}`, true)
    })
  }

	changeUrl = (pathname, flag) => {
	  console.log(pathname)
	  this.url = `${pathname}`
	  if(flag) return
	  window.location.hash = `${pathname}`
	}
}
decorate(RouterStore, {
  url: observable,
  changeUrl: action,
})

export default RouterStore