import * as React from 'react'
import Button from 'arui-feather/button'
import { observable, decorate, action, toJS  } from 'mobx'
import { observer, inject } from 'mobx-react'
// import { appStore } from '../store/index'

class App extends React.Component {

  iteration = 0;

  componentDidMount() {
    const { fetchData } = this.props
    
    fetchData()
  }

  handleClick = () => {

    // const { getPart, part, iteration } = this.props
    // console.log(part.length)
    // this.iteration++
    // if (!part.length) {
    //   const count = 10
    //   return getPart(0, count)
    // }
    // getPart(0, 10 * this.iteration)
  };

  render() {
    const { isLoading } = this.props
    return (
      <main className="container">
        {isLoading ? 'Loading' : 'Loaded'}
        <Button type="button" onClick={ this.handleClick }>Push</Button>
      </main>
    )
  }
}

decorate(App, {
  iteration: observable,
})

export default inject((stores, props, context) => {
    return {
        isLoading: stores.appStore.isLoading,
        fetchData: stores.appStore.fetchData,
    }
})(observer(App))
