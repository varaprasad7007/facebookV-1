import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://thefederal.com/file/2020/08/Untitled-design-2020-08-03T170043.337-696x433.jpg"
        message="Hi there"
        timestamp="Timestamp"
        username="prasad007"
        image="https://www.kait8.com/resizer/rtFyGxlezr5VQFWhln0mnNwFy6A=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/3XTT24K26JDUROG5ZSTQVXFWHY.jpg"
      />
      <Post
        profilePic="https://thefederal.com/file/2020/08/Untitled-design-2020-08-03T170043.337-696x433.jpg"
        message="Hi there"
        timestamp="Timestamp"
        username="prasad007"
        image="https://www.telegraph.co.uk/content/dam/betting/Better-Collective/casino-roulette-wheel-xlarge.jpg"
      />
    </div>
  )
}

export default Feed
