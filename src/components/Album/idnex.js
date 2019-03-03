import * as React from 'react'
import Plate from 'arui-feather/plate'
import Spin from 'arui-feather/spin'
import './styles.sass'

class Album extends React.Component {
    state = {
        images: [], 
        isValid: false
    }
    componentDidMount() {
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

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.album.id !== this.props.album.id) {
            this.setState({ isValid: false })
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
                    
                })
            })
            promise.then(res => this.setState({ isValid: true }))
        }
    }
    render() {
        const { album } = this.props
        const { isValid } = this.state
        if(isValid) {
            return (
              <ul className="gallery">
                {album.photos.map((photo) => (<li key={photo.id} className="gallery__item">
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </li>))
                  }
              </ul>
            )
        }
        return <Spin size='l' visible={true} className="loader"/>
    }
    
}

export default Album