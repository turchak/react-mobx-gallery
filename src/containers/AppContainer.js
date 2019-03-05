import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import Select from 'arui-feather/select'

class AppContainer extends React.Component {
  componentDidMount() {
    const { fetchAlbums, fetchPhotos } = this.props
    fetchAlbums()
    fetchPhotos()
  }

  handleChange = ev => {
    console.log(ev)
    const id = ev[0]
    window.location.hash = `/album/${id}`
  }

  render() {
    const { selectOptions, albumId, albums } = this.props
    console.log(albumId)
    return (
      <div className="container">
        <Select 
          label="Album"  
          mode="radio"
          options={selectOptions} 
          disabled={!selectOptions} 
          hideTick={true} 
          placeholder="Choose Album" 
          onChange={this.handleChange}
          nativeOptionPlaceholder="Choose Album"
          className="select"
          width="available"
          value={albumId ? [ albumId ] : null}
        />
      </div>
    )
  }
}

export default inject(stores => {
  const selectOptions = stores.rootStore.albumsStore.albums
    .map(album => ({ value: album.id, text: album.title }))
  const getAlbumId = (albums, url) => {
    if (albums.length && url !== '/') {
      console.log(url)
      const id = url.slice(url.lastIndexOf('/') +1, url.length)
      return Number(id)
    }
    return null
  }
  const albumId = getAlbumId(stores.rootStore.albumsStore.albums, stores.rootStore.routerStore.url)
  const getPhotos = (photos, id) => photos.reduce((acc, val) => {
    if (val.albumId === id) {
      acc.push(val)
      return acc
    }
    return acc
  }, [])
  const selectedPhotos = getPhotos(stores.rootStore.photosStore.photos, albumId)
  return {
    fetchPhotos: stores.rootStore.photosStore.fetchPhotos,
    fetchAlbums: stores.rootStore.albumsStore.fetchAlbums,
    albums: stores.rootStore.albumsStore.albums,
    changeUrl: stores.rootStore.routerStore.changeUrl,
    photos: stores.rootStore.photosStore.photos,
    setAlbumId: stores.rootStore.albumsStore.setAlbumId,
    url: stores.rootStore.routerStore.url,
    selectOptions,
    albumId,
    selectedPhotos
  }
})(observer(AppContainer))
