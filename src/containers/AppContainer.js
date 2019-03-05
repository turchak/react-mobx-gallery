import * as React from 'react'
import { observer, inject } from 'mobx-react'
import Link from '../components/Link'

class App extends React.Component {

  render() {
    return <div>
      <Link to="/albums">Albums</Link>
      <Link to="/photos">Photos</Link>
    </div>
  }
}

export default inject(stores => ({

  changeUrl: stores.rootStore.routerStore.changeUrl,

}))(observer(App))
