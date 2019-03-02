import * as React from 'react'
import Button from 'arui-feather/button'
import { observable, decorate, action, toJS  } from 'mobx'
import { observer, inject } from 'mobx-react'

class App extends React.Component {

  iteration = 0;

  componentDidMount() {
    console.log(this.props)
    const { fetchData } = this.props
    fetchData()
  }

  handleClick = () => {

    const { getPart, part, iteration } = this.props
    console.log(part.length)
    this.iteration++
    if (!part.length) {
      const count = 10
      return getPart(0, count)
    }
    getPart(0, 10 * this.iteration)
  };

  render() {
    const { part } = this.props
    return (
      <React.Fragment>
          This.is app
      </React.Fragment>
    )
  }
}

decorate(App, {
  iteration: observable,
})

export default inject((data) => {
  console.log(data)
  return {
    iteration: data.store.iteration,
    fetchData: data.store.fetchData,
    isLoading: data.store.isLoading,
    part: data.store.part,
    getPart: data.store.getPart,
  }
})(observer(App))
