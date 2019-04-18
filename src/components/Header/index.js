import Button from 'arui-feather/button'
import Form from 'arui-feather/form'
import Input from 'arui-feather/input'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import logo from '../../assets/img/gallery.svg'
import './styles.sass'

class Header extends React.Component {

  handleClick = ev => {
    ev.preventDefault()
    const { changeUrl } = this.props
    changeUrl('')
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { getSearchResults } = this.props
    const { value } = ev.target[0]
    const { photos } = this.props
    getSearchResults(value)
  }

  render() {
    
    return  (
      <header className="header">
        <a href="/" onClick={this.handleClick} className="logo">
          <img src={logo} alt="logo" className="logo__img"/>
        </a>
        <Form onSubmit={this.handleSubmit} className="form">
          <Input placeholder='Enter photo name' />
          <Button view='extra' type='submit'>Search</Button>
        </Form>
      </header>
    )
  }
  
}

export default inject(stores => ({
  url: stores.rootStore.routerStore.url,
  changeUrl: stores.rootStore.routerStore.changeUrl,
  photos: stores.rootStore.photosStore.photos,
  getSearchResults: stores.rootStore.photosStore.getSearchResults
}))(observer(Header))
