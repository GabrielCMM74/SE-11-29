import React from "react";
import { Card } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";

export default function PostFeed({ posts, numPhotosCol }) {

  if(!posts.length){
	  return <span>There are no cards</span>
  }

  return (
    <Card.Group itemsPerRow={numPhotosCol} stackable>
      {posts.map((post) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </Card.Group>
  );
}
