import * as React from 'react'
import Input from 'arui-feather/input'
import logo from '../../assets/img/gallery.svg'
import './styles.sass'

class Header extends React.Component {

  handleChange = ev => {
    console.log(ev)
  }

  render() {
    return  (
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} className="logo__img"alt="logo"/>
        </a>
        <Input
          placeholder='Search'
          view='line'
          size='l'
          onChange={this.handleChange}
        />
      </header>
    ) 
  }
}

export default Header