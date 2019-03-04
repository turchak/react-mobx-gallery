import * as React from 'react'
import Select from 'arui-feather/select'
import Spin from 'arui-feather/spin'
import { observer, inject } from 'mobx-react'
import Album from '../components/Album'
import SearchResults from '../components/SearchResults'
import emitter from '../services/EventEmitter'

class App extends React.Component {
  componentDidMount() {
    console.log('mount')
    // const { fetchAlbums } = this.props
    // fetchAlbums()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(!prevProps.isAlbums && this.props.isAlbums) {
      this.props.fetchAlbums()
    }
  }

  handleClick = ev => {
    const state = {}
    const title = 'Hello'
    const url = '/albums'
    window.history.pushState(state, title, url)
    this.props.changeUrl('/albums')
    // emitter.emit('event:url-changed', {url: '/albums'})
    // const { setAlbumId } = this.props
    // setAlbumId(ev[0])
  };

  render() {
    console.log(this.props)
    return <div><button type="button" onClick={this.handleClick}>Click</button></div>
    // const { isLoading, selectOptions, isValid, album, searchResult } = this.props
    // if (!isValid) {
    //   return isLoading ? <Spin size='l' visible={true} className="loader"/> : null
    // }
    // return (
    //   <main className="container">
    //     <Select
    //       mode='radio-check'
    //       hideTick={true}
    //       placeholder='Choose Album'
    //       options={selectOptions}
    //       onChange={this.handleChange}
    //       className="select"
    //     />
    //     {album && !searchResult? <Album album={album} /> : null}
    //     {searchResult ? <SearchResults results={searchResult} /> : null}
    //   </main>
    // )
  }
}

export default inject(stores => {
  console.log(stores)
  // const selectOptions = stores.appStore.photos.albums.map(el => ({ value: el.id, text: `Album - #${el.id}` }))
  return {
    fetchAlbums: stores.rootStore.albumsStore.fetchAlbums,
    changeUrl: stores.rootStore.routerStore.changeUrl,
    // isLoading: stores.appStore.isLoading,
    // searchResult: stores.appStore.searchResult,
    // fetchData: stores.appStore.fetchData,
    // setAlbumId: stores.appStore.setAlbumId,
    // album: stores.appStore.album,
    // photos: stores.appStore.photos.albums,
    // isValid: stores.appStore.isValid,
    // part: stores.appStore.part,
    // getPart: stores.appStore.getPart,
    // selectOptions
  }
})(observer(App))
