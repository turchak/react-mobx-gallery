import * as React from 'react'
import Spin from 'arui-feather/spin'
import './styles.sass'

class SearchResults extends React.Component {
    state = {
        images: [], 
        isValid: false,
        result: null,
    }
    componentDidMount() {
        this.updatePhotos()
    }

    componentDidUpdate(prevProps) {
        const { results } = this.props
        if(prevProps.results.searchId !== results.searchId) {
            this.updatePhotos()
        }
    }

    updatePhotos = () => {
        const { results } = this.props
        if (results.photos.length === 0) {
            return this.setState({
                result: 'Not found'
            })
        }
        
        const images = []
        const promise = new Promise((resolve, reject) => {
            results.photos.map(photo => {
                const img = new Image(150, 150)
                img.src = photo.thumbnailUrl
                img.onload = () => {
                    images.push(img)
                    if(images.length === results.photos.length) {
                        resolve(images)
                    }
                }
                return img
            })
        })
        promise.then(res => this.setState({ isValid: true, result: null }))
    }

    render() {
        const { results } = this.props
        const { isValid, result } = this.state
        if(result) {
            return <span>{result}</span>
        }
        if(isValid) {
            return (
              <ul className="gallery">
                {results.photos.map((photo) => (
                  <li key={photo.id} className="gallery__item" onClick={this.handleClick}>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <span className="gallery__title">{photo.title}</span>
                  </li>))
                  }
              </ul>
            )
        }
        return <Spin size='l' visible={true} className="loader"/>
    }
    
}

export default SearchResults