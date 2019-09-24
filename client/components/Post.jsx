import React from 'react'


const Post = ({ post }) => {
  console.log(post)
  return (

    <div className="post w3-card">
      <a href={post.url}>
        <h5 className="w3-contaner w3-orange"> 
        {post.title}
        </h5>
        </a>
      <p>{post.domain}</p>
    </div>
  )
}

export default Post