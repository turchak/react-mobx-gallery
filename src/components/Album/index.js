import * as React from 'react'
import Spin from 'arui-feather/spin'
import './styles.sass'

class Album extends React.Component {
    state = {
        images: [], 
        isValid: false
    }

    componentDidMount() {
        this.updatePhotos()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.album.id !== this.props.album.id) {
            this.setState({ isValid: false })
            this.updatePhotos()
        }
    }

    updatePhotos = () => {
        const { album } = this.props
        const images = []
        const promise = new Promise((resolve, reject) => {
            album.photos.map(photo => {
                const img = new Image(150, 150)
                img.src = photo.thumbnailUrl
                img.onload = () => {
                    images.push(img)
                        if(images.length === album.photos.length) {
                            resolve(images)
                        }
                    }
                return img
                })
            })
        promise.then(res => this.setState({ isValid: true }))
    }

    render() {
        const { album } = this.props
        const { isValid } = this.state
        if(isValid) {
            return (
              <React.Fragment>
                <ul className="gallery">
                  {album.photos.map((photo) => (
                    <li key={photo.id} className="gallery__item" onClick={this.handleClick}>
                      <img src={photo.thumbnailUrl} alt={photo.title} />
                      <span className="gallery__title">{photo.title}</span>
                    </li>))
                    }
                </ul>
              </React.Fragment>
            )
        }
        return <Spin size='l' visible={true} className="loader"/>
    }
}
  
export default Album