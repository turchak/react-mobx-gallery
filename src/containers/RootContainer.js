import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from './AppContainer'
// import emitter from '../services/EventEmitter'
import { observer, inject } from 'mobx-react'

class RootContainer extends React.Component {
  // state = {
  //   url: '/',
  // }
  componentDidMount() {
    // this.unsubscribe = emitter
    //   .subscribe('event:url-changed', data => {
    //     this.setState({
    //       url: data.url
    //     })
    //   })
  }

  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  render() {
    const { url } = this.props
    console.log(url)
    if (url === '/') {
      return (
        <>
          <App isPhotos/>
        </>
      )
    }
    if (url === '/albums') {
      return (
        <>
          <App isAlbums/>
        </>
      )
    }
  }
}

export default inject(stores => {
  console.log(stores)
  // const selectOptions = stores.appStore.photos.albums.map(el => ({ value: el.id, text: `Album - #${el.id}` }))
  return {
    url: stores.rootStore.routerStore.url
  }
})(observer(RootContainer))