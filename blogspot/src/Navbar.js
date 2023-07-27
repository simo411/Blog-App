import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    // Clear the user context and remove the authentication token from local storage
    setUser(null);
    localStorage.removeItem('authToken');
    // Redirect to the login page after logging out
    history.push('/login');
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleProfileClick = () => {
    // Redirect to the user's profile page
    history.push('/profile');
  };

  const handleOutsideClick = useCallback((e) => {
    if (isDropdownOpen && !e.target.classList.contains('btn-dropdown')) {
      setDropdownOpen(false);
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    // Add click event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <nav className="navbar">
      {user ? (
          <>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
      </>
        ) : null}
      <div className="links">
        {user ? (
          <>
            <Link to="/home">Home</Link>
            <Link to="/create">New Blog</Link>
            <button className="btn-dropdown" onClick={handleDropdownToggle}>
              {user.username}
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">

                <button onClick={handleProfileClick}>Profile</button>
                <button onClick={handleLogout}>Log out</button>
              </div>
            )}
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
