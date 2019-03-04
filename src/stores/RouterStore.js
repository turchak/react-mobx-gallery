import { observable, action, decorate  } from 'mobx'

class RouterStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.url = window.location.pathname
  }

	changeUrl = url => {
	  this.url = url
	}
}
decorate(RouterStore, {
  url: observable,
  changeUrl: action,
})

export default RouterStore