import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import { GoogleFont, TypographyStyle } from 'react-typography'
import PropTypes from 'prop-types'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

class Html extends React.Component {
    render () {
        const { body } = this.props
        const head = Helmet.rewind()

        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
        }

        return (
            <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
              />
                {head.title.toComponent()}
              <TypographyStyle typography={typography} />
              <GoogleFont typography={typography} />
                {css}
            </head>
            <body className="landing-page">
            <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
            <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
            </body>
            </html>
        )
    }
}

Html.propTypes = {
    body: PropTypes.string,
}

Html.displayName = 'HTML'

export default Html
