import * as React from 'react'
import { observer, inject } from 'mobx-react'

class AlbumsContainer extends React.Component {
	componentDidMount() {
	}

	render() {
    return <div>Albums</div>
  }
}

export default inject(stores => ({
  fetchAlbums: stores.rootStore.albumsStore.fetchAlbums,
}))(observer(AlbumsContainer))
