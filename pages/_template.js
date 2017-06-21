import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import PropTypes from 'prop-types'

const style = {
  header: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(24),
      marginTop: rhythm(1.5),
      paddingLeft: `${rhythm(3 / 4)}`,
      paddingRight: `${rhythm(3 / 4)}`,
      marginBottom: rhythm(1),
  },
  h1: {
    marginBottom: rhythm(1),
    fontSize: scale(1.5).fontSize,
    lineHeight: scale(1.5).lineHeight,
    marginTop: 0
  },
  h2: {
    marginTop: 0,
    textAlign: 'center'
  },
  h3: {
    fontFamily: 'Roboto, sans-serif',
    marginTop: 0
  },
  img: {
    margin: 0,
    border: 0,
    width: rhythm(1),
    height: rhythm(1),
    verticalAlign: 'middle'
  },
  Link: {
    boxShadow: 'none',
    textDecoration: 'none',
    color: 'inherit'
  },
  Container: {
    maxWidth: rhythm(24),
    paddingLeft: `${rhythm(3 / 4)}`,
    paddingRight: `${rhythm(3 / 4)}`,
  }
}

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <header style={style.header}>
          <h1 style={style.h1}><Link style={style.Link} to={prefixLink('/')} > {config.blogTitle} </Link></h1>
        </header>
      )
    } else {
      header = (
        <header style={style.header}>
          <h1 style={style.h1}><Link style={style.Link} to={prefixLink('/')}> {config.blogTitle} </Link></h1>
        </header>
      )
    }
    return (
    <div>
        {header}
        <hr />
      <Container style={style.Container}>
          {children}
      </Container>
    </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template
