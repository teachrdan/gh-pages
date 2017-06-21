import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { scale, rhythm } from 'utils/typography'
import { config } from 'config'

class Contact extends React.Component{
    render () {
        const style = {
            head: {
                marginTop: rhythm(2)
            },
            github: {
                width: '1rem',
                height: '1rem',
                marginRight: '1rem'
            },
            email: {
                width: '1rem',
                height: '1rem',
                marginRight: '1rem'
            },
            license: {
                fontSize: scale(-0.8).fontSize,
                marginBottom: rhythm(2),
            }
        }
        return (
            <div style={style.head}>
                <a href={`${config.github}`}>
                    <img src="https://themes.gohugo.io/theme/cocoa/img/github.svg" alt="github" style={style.github} />
                </a>
                <a href={`mailto:${config.email}`}>
                    <img src="https://themes.gohugo.io/theme/cocoa/img/email.svg" alt="email"  style={style.email}/>
                </a>
                <div style={style.license}>
                    <span><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a></span>
                </div>
            </div>
        )
    }
}

export default Contact