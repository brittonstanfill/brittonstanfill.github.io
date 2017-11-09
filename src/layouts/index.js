// Main "div". "children" is the content/body of your app. This is where you can put nav/footer which you want on every page.

import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/Nav'

// Add/import any style files you have in ../styles 
import '../styles/index.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <Nav />
        {children()}
        <div>FOOTER ON EVERY PAGE</div>
      </div>
    )
  }
}

export default Template
