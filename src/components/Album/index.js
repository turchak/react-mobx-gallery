import * as React from 'react'
import './styles.sass'

class Album extends React.Component {

  render() {
    const { album } = this.props
     
    return (
      <li>
        <img src={album} alt="" />
        {album.title}
      </li>
    )
      
  }
}
  
export default Album