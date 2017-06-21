import React from 'react'
import { rhythm } from 'utils/typography'
import { config } from 'config'

const style = {
    comments: {
        marginTop: rhythm(1.5),
    },
    visit: {
        marginTop: rhythm(2)
    }
}

class GithubIssues extends React.Component {
    render () {
        return (
            <div style={style.comments}>
                <h6>COMMENTS</h6>
                <span style={style.visit}>visit the <a href="https://github.com/guoliim/guoliim.github.io/issues/1#new_comment_field">Github Issue</a> to comment on this post</span>
            </div>
        )
    }
}

export default GithubIssues

