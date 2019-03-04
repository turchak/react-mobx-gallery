import * as React from 'react'
import Select from 'arui-feather/select'
import Spin from 'arui-feather/spin'
import { observer, inject } from 'mobx-react'
import Album from '../components/Album'
import SearchResults from '../components/SearchResults'

class App extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  handleChange = ev => {
    const { setAlbumId } = this.props
    setAlbumId(ev[0])
  };

  render() {
    const { isLoading, selectOptions, isValid, album, searchResult } = this.props
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
        {album && !searchResult? <Album album={album} /> : null}
        {searchResult ? <SearchResults results={searchResult} /> : null}
      </main>
    )
  }
}

export default inject(stores => {
  const selectOptions = stores.appStore.photos.albums.map(el => ({ value: el.id, text: `Album - #${ el.id }` }))
    return {
        isLoading: stores.appStore.isLoading,
        searchResult: stores.appStore.searchResult,
        fetchData: stores.appStore.fetchData,
        setAlbumId: stores.appStore.setAlbumId,
        album: stores.appStore.album,
        photos: stores.appStore.photos.albums,
        isValid: stores.appStore.isValid,
        part: stores.appStore.part,
        getPart: stores.appStore.getPart,
        selectOptions
    }
})(observer(App))
