import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'
import { fixLinks } from 'utils'
import Komments from 'components/Komments'
import { prefixLink } from 'gatsby-helpers'
import ReadNext from 'components/ReadNext'
import Tags from 'components/Tags'
import GithubIssues from 'components/GithubIssues'
import Contact from 'components/Contact'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import PropTypes from 'prop-types'

import 'css/zenburn.css'
import 'css/article.css'

const style = {
  h1: {
    // marginTop: 0
    fontFamily: 'TrajanPro-Bold, Georgia, SourceHanSerifCN-Regular, san-serif',
  },
  hr: {
    marginBottom: rhythm(2)
  },
  Tags: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    marginTop: '3rem',
    marginBottom: '3rem'
  },
  date: {
    marginBottom: rhythm(1 / 2),
    fontSize: rhythm(1 / 2),
    color: 'gray'
  },
}

class MarkdownWrapper extends React.Component {
  componentDidMount () {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render () {
    const { route } = this.props
    const post = route.page.data

    return (
        <div>
          <Helmet title={ post.title ? `${post.title} | ${config.blogTitle}` : config.blogTitle } />
          <div className="markdown">
            <h1 style={style.h1}>{ post.title }</h1>
              {!post.date ? null : <div style={style.date}>
                                      {`Posted ${moment(post.date).calendar().toLowerCase()}`}
                                   </div>}
            <div className="article" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />
            <Tags post={post} style={style.Tags} />
            <ReadNext post={post} pages={route.pages} />
            <Contact />
          </div>
        </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object
}

MarkdownWrapper.contextTypes = {
  router: PropTypes.object.isRequired
}

export default MarkdownWrapper
