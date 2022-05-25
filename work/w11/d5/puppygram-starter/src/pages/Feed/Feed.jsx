import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import AddPost from '../../components/AddPost/AddPost'
import PostFeed from '../../components/PostFeed/PostFeed'
import * as postsAPI from '../../utils/postApi';
// import {create, getAll} from '../../utils/postApi'
import {  Grid } from 'semantic-ui-react'


export default function Feed(){
  const [posts, setPosts] = useState([])

	// C create in Crud
  async function handleAddPost (post){
    console.log(post)
    const data = await postsAPI.create(post);
    console.log(data.post, ' This is newPup', data, ' data var')
    setPosts(posts => [data.post, ...posts])
  }

  // R read in crud
  async function getPosts(){

    try {
      const data = await postsAPI.getAll();
      setPosts([...data.posts])
    } catch(err){
      console.log(err, ' this is the error')
    }
  }

  // useEffect runs once 
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getPosts()
  }, [])

  
    return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <Header/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddPost handleAddPost={handleAddPost}/>
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