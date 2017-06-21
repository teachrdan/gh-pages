import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import R from 'ramda'
import { rhythm, scale } from 'utils/typography'
import { getTags } from 'utils'
import Summary from 'components/Summary'
import PropTypes from 'prop-types'

const style = {
  bottom: {
    marginBottom: rhythm(2),
  },
  h6: {
    margin: 0,
    fontSize: scale(-0.5).fontSize,
    lineHeight: scale(-0.5).lineHeight,
    letterSpacing: -0.25
  },
  h3: {
    fontFamily: 'TrajanPro-Bold, Georgia, SourceHanSerifCN-Regular, san-serif',
    marginTop: 0,
    marginBottom: '0.5rem'
  },
  summary: {
      marginBottom: rhythm(2)
  }
}

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    let { readNext } = post
    let nextPost

    if (readNext) {
      // underscore.string#include => ramda#contains, lodash#find => ramda#find
      // nextPost = find(pages, (page) => includes(page.path, readNext))
      // nextPost = find(pages, (page) => R.contains(readNext, page.path))
        nextPost = R.find(page => R.contains(readNext, page.path), pages)


    }else {
      readNext = pages
        .filter(p => p.data.tags && p.data.body !== post.body)
        .map(p => {
          if (post.tags) {
            const t = getTags(p)
            // p.diff = intersect(post.tags, t).length
            // just-intersect => ramda#intersection
            p.diff = R.intersection(post.tags, t).length
          }
          return p
        })
        .sort((a, b) => a.diff - b.diff)
        .slice(-5)
        .sort((a, b) => Math.random() * -0.5)
        .pop()
      if (readNext) {
        readNext = readNext.path
        // nextPost = find(pages, (page) => includes(page.path, readNext))
          // underscore.string#include => ramda#contains, lodash#find => ramda#find
          // nextPost = find(pages, (page) => R.contains(readNext, page.path))
          nextPost = R.find(page => R.contains(readNext, page.path), pages)
      }
    }

    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      // nextPost = find(pages, (page) => includes(page.path, readNext.slice(1, -1)))
        // underscore.string#include => ramda#contains, lodash#find => ramda#find
        // nextPost = find(pages, (page) => R.contains(readNext.slice(1, -1), page.path))
        nextPost = R.find(page => R.contains(readNext.slice(1, -1), page.path), pages)

      return (
      <div style={style.bottom}>
        <h6 style={style.h6}>READ THIS NEXT:</h6>
        <h3 style={style.h3}><Link to={{ pathname: prefixLink(nextPost.path)}} > {nextPost.data.title} </Link></h3>
        <Summary body={nextPost.data.body} style={style.summary} />
        <hr />
      </div>
      )
    }
  }
}

ReadNext.propTypes = {
  post: PropTypes.object.isRequired,
  pages: PropTypes.array
}

export default ReadNext
