import * as React from 'react'
import { observer, inject } from 'mobx-react'

class PhotosContainer extends React.Component {

  render() {
    return <div>Photos</div>
  }
}

export default inject(stores => ({
  fetchPhotos: stores.rootStore.photosStore.fetchPhotos,
}))(observer(PhotosContainer))
