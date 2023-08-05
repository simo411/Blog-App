import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from './Login';
import Register from './Register';
import { AuthProvider } from './AuthContext';
import Start from './Start';
import Profile from './Profile';


function App() {
  const [theme, setTheme] = useState('light-theme');

  // Function to toggle the theme
  const toggleTheme = () => {
    if( theme === 'dark-theme'){
      setTheme('light-theme');
    }
    else{
      setTheme('dark-theme');
    }
  };
  
  useEffect(() => {
    document.body.className = theme;
  },[theme])
  return (
    <AuthProvider>
      <Router>
        <div className={"App"}>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Start />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
          <div className="theme-switch">
            <button className={theme === 'dark-theme' ? 'sun' : 'moon'} onClick={toggleTheme}></button>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
