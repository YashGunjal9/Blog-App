import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { post } from '../data';

const PostDetails = () => {
  const { id } = useParams();

  // Find the selected post
  const selectedPost = post.find(
    (postItem) => String(postItem.id) === String(id)
  );

  // Handle invalid post IDs
  if (!selectedPost) {
    return (
      <div>
        <h2>Post Not Found</h2>

        <p>No post exists with ID: {id}</p>

        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Page heading */}
      <h2>Post Details</h2>

      {/* Selected post title */}
      <h1>{selectedPost.title}</h1>

      {/* Selected post content */}
      <p>{selectedPost.content}</p>

      {/* Return to the home page */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default PostDetails;