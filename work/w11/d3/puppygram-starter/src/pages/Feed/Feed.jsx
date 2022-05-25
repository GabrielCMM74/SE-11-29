import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AddPostForm from '../../components/AddPostForm/AddPostForm'
import PostFeed from '../../components/PostFeed/PostFeed'
import * as postsAPI from '../../utils/post-api';
import {  Grid } from 'semantic-ui-react'

export default function Feed(){
  const [posts, setPosts] = useState([])


  async function handleAddPost (post){
    console.log(post)
    const data = await postsAPI.create(post);
    console.log(data.post, ' This is newPup', data, ' data var')
    setPosts(posts => [data.post, ...posts])
  }

  async function getPosts(){

    try {
      const data = await postsAPI.getAll();
      setPosts([...data.posts])
    } catch(err){
      console.log(err, ' this is the error')
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  
    return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddPostForm handleAddPost={handleAddPost}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <PostFeed posts={posts}  numPhotosCol={1}  />
        </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}