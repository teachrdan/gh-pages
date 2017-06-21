import React from 'react'
import R from 'ramda'
import { fixLinks } from 'utils'
import PropTypes from 'prop-types'

class Summary extends React.Component {
  summary (body) {
    const split = body.split('<hr>')
    // return split.length !== 0 && split[0].length < 200 ? split[0] : (`${prune(body.replace(/<[^>]*>/g, ''), 120)}...`)
      // underscore.string#prune => ramda#take
      return split.length !== 0 && split[0].length < 200 ? split[0] : (`${R.take(120, body.replace(/<[^>]*>/g, ''))}...`)
  }

  componentDidMount () {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render () {
    return (<div ref="markdown" dangerouslySetInnerHTML={{__html: this.summary(this.props.body)}} style={{marginBottom: '0.5rem'}} />)
  }
}

Summary.propTypes = {
  body: PropTypes.string.isRequired
}

Summary.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Summary
