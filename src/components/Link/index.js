import * as React from 'react'
import { observer, inject } from 'mobx-react'

class Link extends React.Component {

  handleClick = ev => {
    ev.preventDefault()
    const { pathname } = ev.currentTarget
    const { changeUrl } = this.props
    changeUrl(pathname)
  }

  render() {
    const { children, to } = this.props
    return <a onClick={this.handleClick} href={to}>{children}</a>
  }
}
export default inject(stores => ({
  changeUrl: stores.rootStore.routerStore.changeUrl,
}))(observer(Link))
