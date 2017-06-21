import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        It's <strong>{config.authorName}</strong>: Oakland resident, full stack developer, cat lover, freedom fighter, coffee afficianado.
      </p>
    )
  }
}

export default Bio
