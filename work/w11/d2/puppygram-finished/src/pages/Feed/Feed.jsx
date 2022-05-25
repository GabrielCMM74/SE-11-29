import React, { useState, useEffect } from 'react';
import AddPost from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/post-api';

export default function Feed({ user,handleLogout}){
  const [posts, setPosts] = useState([])


  async function handleAddPost (post){
    console.log(post)
    const data = await postsAPI.create(post);
    console.log(data.post, ' This is newPup', data, ' data var')
    setPosts(posts => [data.post, ...posts])
  }

  
    return (
        <>
        
        <AddPost handleAddPost={handleAddPost}/>
      
        </>
    )
}