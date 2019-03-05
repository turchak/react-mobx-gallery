import { observable, action, decorate  } from 'mobx'

class RouterStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.url = null
  }

	changeUrl = pathname => {
	  const title = pathname
	  const url = pathname
	  const state = {
	    pathname,
	    url,
	  }
	  window.history.pushState(state, title, url)
	  this.url = pathname
	}
}
decorate(RouterStore, {
  url: observable,
  changeUrl: action,
})

export default RouterStore