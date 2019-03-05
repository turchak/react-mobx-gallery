import * as React from 'react'
import { observer, inject } from 'mobx-react'

class AlbumsContainer extends React.Component {
  componentDidMount() {
    const { fetchAlbums } = this.props
    fetchAlbums()
  }

  render() {
    const { albums } = this.props
    return (
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
          </li>
        ))}
      </ul>
    )
  }
}

export default inject(stores => ({
  fetchAlbums: stores.rootStore.albumsStore.fetchAlbums,
  albums: stores.rootStore.albumsStore.albums,
}))(observer(AlbumsContainer))
