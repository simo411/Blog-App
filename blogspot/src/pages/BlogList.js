import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  };

  const getFormattedDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const currentDate = new Date();
  const today = currentDate.toLocaleDateString();
  currentDate.setDate(currentDate.getDate() - 1);
  const yesterday = currentDate.toLocaleDateString();

  const filterBlogsByDate = (category) => {
    return blogs.filter((blog) => {
      const blogDate = new Date(blog.posted_on).toLocaleDateString();
      switch (category) {
        case 'Today':
          return blogDate === today;
        case 'Yesterday':
          return blogDate === yesterday;
        case 'Previous 7 days':
          return (
            new Date(blog.posted_on) >= currentDate.setDate(currentDate.getDate() - 7) &&
            blogDate !== today &&
            blogDate !== yesterday
          );
        case 'Previous 30 days':
          return (
            new Date(blog.posted_on) >= currentDate.setDate(currentDate.getDate() - 30) &&
            blogDate !== today &&
            blogDate !== yesterday
          );
        default:
          return (
            new Date(blog.posted_on) < currentDate.setDate(currentDate.getDate() - 30)
          );
      }
    });
  };
  const renderBlogCategory = (category) => {
    const blogsInCategory = filterBlogsByDate(category);

    if (blogsInCategory.length === 0) {
      // Return null for empty categories to hide them
      return null;
    }

    return (
      <div key={category}>
        <h3>{category}</h3>
        {blogsInCategory.map((blog) => {
          const formattedDate = getFormattedDate(blog.posted_on);
          const firstLetter = blog.author.charAt(0).toUpperCase();
          const truncatedBody = truncateText(blog.body, 200);

          return (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>{truncatedBody}</p>
                <div className="date">on {formattedDate}</div>
              </Link>
              <div className="author-info">
                <div className="user-circle">
                    <b>{firstLetter}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };


  return (
    <div className="blog-list">
      {renderBlogCategory('Today')}
      {renderBlogCategory('Yesterday')}
      {renderBlogCategory('Previous 7 days')}
      {renderBlogCategory('Previous 30 days')}
      {renderBlogCategory('Older')}
    </div>
  );
};

export default BlogList;
