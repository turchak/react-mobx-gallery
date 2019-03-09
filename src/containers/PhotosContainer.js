import * as React from 'react'

import { inject, observer } from 'mobx-react'

import Spin from 'arui-feather/spin'

class PhotosContainer extends React.Component {
  // componentDidMount() {
  //   // this.updatePhotos()
  // }
  // updatePhotos = () => {
  //   const { album } = this.props
  //   const images = []
  //   const promise = new Promise((resolve, reject) => {
  //     album.photos.map(photo => {
  //       const img = new Image(150, 150)
  //       img.src = photo.thumbnailUrl
  //       img.onload = () => {
  //         images.push(img)
  //         if(images.length === album.photos.length) {
  //           resolve(images)
  //         }
  //       }
  //       return img
  //     })
  //   })
  //   promise.then(res => this.setState({ isValid: true }))
  // }

  render() {
    const { selectedPhotos, isLoading } = this.props
    // console.log(selectedPhotos)
    return (
      <>
        <Spin size='l' visible={isLoading} className="loader" />
        <ul>
          {selectedPhotos.map(photo => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default inject(stores => {
  const { albumsStore, routerStore, photosStore } = stores.rootStore
  return {
    isLoading: photosStore.isLoading,
    selectedPhotos: photosStore.selectedPhotos
  }
})(observer(PhotosContainer))