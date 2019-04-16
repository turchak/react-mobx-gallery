import * as React from 'react'

import { inject, observer } from 'mobx-react'

import AppContainer from './AppContainer'
import DevTools from 'mobx-react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PhotosContainer from './PhotosContainer'

const  RootContainer = props => {
  const switchRoute = url => {
    switch (url) {
    case '/':
      return <AppContainer />
    case '/photos':
      return <PhotosContainer />
    default:
      return <AppContainer />
    }
  }
  const { url } = props
  return (
    <>
      <Header />
      {switchRoute(url)}
      <Footer />
      <DevTools /> 
    </>
  )
}

export default inject(stores => ({
  url: stores.rootStore.routerStore.url,
  changeUrl: stores.rootStore.routerStore.changeUrl,
}))(observer(RootContainer))