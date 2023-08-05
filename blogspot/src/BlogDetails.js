import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { AuthContext } from './AuthContext';
import React, { useState, useEffect, useContext } from "react";

const replaceNewlinesWithBreaks = (text) => {
  return text.split("\n").map((paragraph, index) => (
    <React.Fragment key={index}>
      {index > 0 && <br />} {/* Added <br /> except for the first paragraph */}
      {paragraph}
    </React.Fragment>
  ));
};



const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
  const [mid, setMid] = useState('');
  const { user } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8000/login/${user.username}`)
      .then((response) => response.json())
      .then((data) => {
        setMid(data.m_id);
      })
      .catch((error) => {
        console.error('Error fetching member data:', error);
      });
  }, [user.username]);

  const handleDelete = () => {
    // Checking if the logged-in user is the author of the blog
    if (mid === blog.author_id) {
      // Perform the delete operation using the blog ID
      fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          // Redirect to home page after successful deletion
          history.push('/home');
        })
        .catch((error) => {
          console.error('Error deleting blog:', error);
          // Handle error state
        });
    }
  };


  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="blog-body">{replaceNewlinesWithBreaks(blog.body)}</div>
          {mid === blog.author_id && (
            <button onClick={handleDelete}>Delete</button>
          )}
        </article>
      )}
    </div>
  );
}

export default BlogDetails;