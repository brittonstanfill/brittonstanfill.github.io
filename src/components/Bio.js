import React from 'react'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div className="bio_container">
        <img
          className="profile-pic"
          src={profilePic}
          alt={`Britton Stanfill`}
        />
        <p>
          I'm a Senior UX Designer and the Team Lead at Jive Communications. I founded DevMountain's UX/UI program and have mentored over 200 UX Designers and Developers.
          {' '}
          <a href="https://twitter.com/bstanfill">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
