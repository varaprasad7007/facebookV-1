import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({ image, ProfileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={ProfileSrc} />
      <h4>
        {title}
      </h4>
    </div>
  )
}

export default Story
