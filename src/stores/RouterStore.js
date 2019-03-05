import { observable, action, decorate  } from 'mobx'

class RouterStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    this.url = null
  }

	changeUrl = pathname => {
	  console.log(typeof pathname)
	  this.url = `/${pathname}`
	}
}
decorate(RouterStore, {
  url: observable,
  changeUrl: action,
})

export default RouterStore