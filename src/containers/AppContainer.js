import * as React from 'react'
import { observer, inject } from 'mobx-react'

class App extends React.Component {

  handleClick = ev => {
    const { name } = ev.target
    //
    const title = name
    const url = `/${name}`
    const state = {
      name,
      url,
    }
    window.history.pushState(state, title, url)
    // console.log(window.history)
    this.props.changeUrl(`/${name}`)
  };

  render() {
    return <div>
      <button
        type="button"
        name="albums"
        onClick={this.handleClick}
      >Albums</button>
      <button
        type="button"
        name="photos"
        onClick={this.handleClick}
      >Photos</button>
    </div>
  }
}

export default inject(stores => ({

  changeUrl: stores.rootStore.routerStore.changeUrl,

}))(observer(App))
