    // client/src/components/PostList.js
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    function PostList() {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
          .then(response => setPosts(response.data))
          .catch(error => console.error('Error fetching posts:', error));
      }, []);

      return (
        <div>
          <h1>Blog Posts</h1>
          {posts.map(post => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 100)}...</p>
              <p>By: {post.author}</p>
            </div>
          ))}
        </div>
      );
    }

    export default PostList;