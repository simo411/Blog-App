import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from './Components/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import Start from './pages/Start';
import Profile from './pages/Profile';


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
