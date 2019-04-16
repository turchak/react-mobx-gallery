import * as React from 'react'

import { inject, observer } from 'mobx-react'

import Spin from 'arui-feather/spin'

class PhotosContainer extends React.Component {

  render() {
    const { selectedPhotos, isLoading } = this.props

    return (
      <>
        <Spin size='l' visible={isLoading} className="loader" />
        <ul>
          {selectedPhotos.map(photo => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title}/>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default inject(stores => {
  const { photosStore } = stores.rootStore
  return {
    isLoading: photosStore.isLoading,
    selectedPhotos: photosStore.selectedPhotos
  }
})(observer(PhotosContainer))