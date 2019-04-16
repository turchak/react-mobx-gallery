import * as React from 'react'

import { inject, observer } from 'mobx-react'

import PhotosContainer from './PhotosContainer'

// import { toJS } from 'mobx'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.selectRef = new React.createRef()
  }
  
  componentDidMount() {
    const { fetchAlbums, fetchPhotos } = this.props
    fetchAlbums()
    fetchPhotos()
  }

  componentDidUpdate(prevProps) {
    const { albumId, getPhotos, photos } = this.props
    if(prevProps.albumId !== albumId || prevProps.photos.length !== photos.length) {
      getPhotos(albumId)
      if (!this.props.albumId) {
        this.selectRef.current.value = 0
        return 
      }
      this.selectRef.current.value = albumId
    }
  }

  handleChange = ev => {
    const { getPhotos, changeUrl } = this.props
    changeUrl(`/album/${ev.target.value}`)
    getPhotos(ev.target.value)
  }

  render() {
    const { selectOptions } = this.props
    return (
      <div className="container">
        <select 
          className="select"
          name="albums" 
          defaultValue={0} 
          ref={this.selectRef} 
          onChange={this.handleChange}
        >
          <option value="0" disabled>Choose Album</option>
          {selectOptions.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
        </select>
        <PhotosContainer />
      </div>
    )
  }
}

export default inject(stores => {
  const { albumsStore, routerStore, photosStore } = stores.rootStore
  const selectOptions = albumsStore.albums
    .reduce((acc, val) => {
      acc.push({ value: val.id, text: val.title })
      return acc
    }, [])

  const getAlbumId = (albums, url) => {
    if (albums.length && url !== '/') {
      const id = url.slice(url.lastIndexOf('/') +1, url.length)
      return Number(id)
    }
    return null
  }
  
  const albumId = getAlbumId(albumsStore.albums, routerStore.url)
  return {
    url: routerStore.url,
    fetchPhotos: photosStore.fetchPhotos,
    fetchAlbums: albumsStore.fetchAlbums,
    changeUrl: routerStore.changeUrl,
    getPhotos: photosStore.getPhotos,
    photos: photosStore.photos,
    selectOptions,
    albumId,
  }
})(observer(AppContainer))
