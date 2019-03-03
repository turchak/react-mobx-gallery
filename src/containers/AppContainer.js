import * as React from 'react'
import Button from 'arui-feather/button'
import Select from 'arui-feather/select'
import Spin from 'arui-feather/spin'
import { observable, decorate, toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import Album from '../components/Album/idnex'

class App extends React.Component {

  iteration = 0;

  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  handleChange = ev => {
    const { setAlbumId } = this.props
    setAlbumId(ev[0])
    console.log(ev)
  };

  render() {
    const { isLoading, selectOptions, isValid, album } = this.props
    console.log(toJS(album))
    if (!isValid) {
      return isLoading ? <Spin size='l' visible={true} className="loader"/> : null
    }
    return (
      <main className="container">
        <Select
          mode='radio-check'
          hideTick={true}
          placeholder='Choose Album'
          options={selectOptions}
          onChange={this.handleChange}
          className="select"
        />
        {album ? <Album album={album} /> : null}
      </main>
    )
  }
}

decorate(App, {
  iteration: observable,
})

export default inject((stores, props, context) => {
  console.log(stores)
  const selectOptions = stores.appStore.photos.albums.map(el => ({ value: el.id, text: `Album - #${ el.id }` }))
    return {
        isLoading: stores.appStore.isLoading,
        fetchData: stores.appStore.fetchData,
        setAlbumId: stores.appStore.setAlbumId,
        album: stores.appStore.album,
        photos: stores.appStore.photos.albums,
        isValid: stores.appStore.isValid,
        selectOptions
    }
})(observer(App))
