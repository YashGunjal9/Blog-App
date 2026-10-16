import React from 'react';
import { Link } from 'react-router-dom';
import { post } from '../data';

const Home = () => {
  return (
    <div>
      <h2>Blog Posts</h2>

      {post.map((postItem) => (
        <div key={postItem.id}>
          <h3>{postItem.title}</h3>

          <p>{postItem.content}</p>

          {/* Open details in the same browser tab */}
          <Link to={`/posts/${postItem.id}`}>
            View More
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;