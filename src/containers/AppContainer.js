import * as React from 'react'
import Button from 'arui-feather/button'
import Select from 'arui-feather/select'
import Spin from 'arui-feather/spin'
import { observable, decorate, toJS } from 'mobx'
import { observer, inject } from 'mobx-react'

class App extends React.Component {

  iteration = 0;

  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  handleClick = () => {
  };

  render() {
    const { isLoading, photos, selectOptions, isValid } = this.props
    if (!isValid) {
      return isLoading ? <Spin size='l' visible={ true }/> : null
    }
    return (
      <main className="container">
        <Select
                mode='radio'
                hideTick={ true }
                placeholder='Choose Album'
                options={ selectOptions }
                renderPopupOnFocus={ true }
        />
      </main>
    )
  }
}

decorate(App, {
  iteration: observable,
})

export default inject((stores, props, context) => {
  const selectOptions = stores.appStore.photos.albums.map(el => ({ value: el.id, text: `Album - #${ el.id }` }))
    return {
        isLoading: stores.appStore.isLoading,
        fetchData: stores.appStore.fetchData,
        photos: stores.appStore.photos.albums,
        isValid: stores.appStore.isValid,
        selectOptions
    }
})(observer(App))
