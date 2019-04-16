import * as React from 'react'
import Input  from 'arui-feather/input'
import Form from 'arui-feather/form'
import FormField  from 'arui-feather/form-field'
import Button  from 'arui-feather/button'
import logo from '../../assets/img/gallery.svg'
import { observer, inject } from 'mobx-react'

import './styles.sass'

const Header = props => {
  const handleClick = ev => {
    ev.preventDefault()
    const { changeUrl } = props
    changeUrl('')
  }

  return  (
    <header className="header">
      <a href="/" onClick={handleClick} className="logo">
        <img src={logo} alt="logo" className="logo__img"/>
      </a>
      <Form onSubmit={() => { alert('Мы перезвоним вам в течение 5 минут') }} className="form">
        <Input placeholder='Enter photo name' />
        <Button view='extra' type='submit'>Search</Button>
      </Form>
    </header>
  )
}

export default inject(stores => ({
  url: stores.rootStore.routerStore.url,
  changeUrl: stores.rootStore.routerStore.changeUrl,
}))(observer(Header))
