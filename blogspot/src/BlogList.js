import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => {
        const date = new Date(blog.posted_on);
        const formattedDate = date.toLocaleDateString();
        const firstLetter = blog.author.charAt(0).toUpperCase();

        return (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <div className='date'>on {formattedDate}</div>
            </Link>
            <div className="author-info">
              <div className="user-circle"><b>{firstLetter}</b></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;