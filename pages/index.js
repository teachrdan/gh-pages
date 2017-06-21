import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import Summary from 'components/Summary'
import Contact from 'components/Contact'
import moment from 'moment'
import PropTypes from 'prop-types'
import 'css/font.css'

const style = {
    ul: {
        marginLeft: rhythm(0)
    },
  post: {
    marginTop: rhythm(1.8),
    marginBottom: rhythm(1),
    listStyle: 'none'
  },
  Link: {
    fontFamily: 'TrajanPro-Bold, Georgia, SourceHanSerifCN-Regular, san-serif',
  },
  date: {
    fontSize: rhythm(1 / 2),
    color: 'gray'
  }
}

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
      //console.log(this.props);
    // Sort pages.
      // lodash#sortBy => ramda#sortBy
    // const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
    // ).reverse()
    const sortedPages = R.sortBy(page => access(page, 'data.date'), this.props.route.pages).reverse()
    sortedPages.forEach((page) => {
      // if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        // lodash#include => ramda#contains
       if (access(page, 'file.ext') === 'md' && !R.contains('/404', page.path)) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li key={page.path} style={style.post}>
            <Link style={style.Link} to={prefixLink(page.path)}>
            {title}
            </Link>
            <div style={style.date}>
              {moment(page.data.date).calendar()}
            </div>
            <Summary body={page.data.body} />
          </li>
        )
      }
    })
    return (
    <div>
      <Helmet title={config.blogTitle} />
        <ul style={style.ul}>
        {pageLinks}
        </ul>
       <Contact />
    </div>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object
}

export default BlogIndex
