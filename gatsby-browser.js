import ReactGA from 'react-ga'
import { config, pages } from 'config'
import R from 'ramda'

if (config.gaCode) {
  ReactGA.initialize(config.gaCode)
}

exports.onRouteUpdate = state => {
  if (config.gaCode) {
    // const page = find(pages, {path: state.pathname})
      // loadsh#find => ramda#find
    const page = R.find(page => page.path === state.pathname, pages)
    ReactGA.ga('send', 'pageview', {
      location: location.pathname,
      title: page && page.data && page.data.title ? page.data.title : state.pathname,
      page: state.pathname
    })
  }
}
