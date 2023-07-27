import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [name, setName] = useState('');
  const { user } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8000/login/${user.username}`)
      .then((response) => response.json())
      .then((data) => {
        setAuthorId(data.m_id);
        setName(data.name);
      })
      .catch((error) => {
        console.error('Error fetching member data:', error);
      });
  }, [user.username]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author: name,
      author_id: authorId,
    };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then((response) => response.json())
      .then((data) => {
        history.push('/home');
      })
      .catch((error) => {
        console.error('Error creating blog:', error);
        // Handle error state
      });
  }
  console.log(user);

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Blog</button>
      </form>
      <div className="preview">
        <h1>Preview</h1>
        <h2>{title}</h2>
        <p>Written by {name}</p>
        <div>{body}</div>
      </div>
    </div>
  );
}

export default Create;
