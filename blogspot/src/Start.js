import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Start = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  },[]);

  return (
    <div className={`start ${showText ? 'show-text' : ''}`}>
      <div className="image-container">
        <img src="/images/blogspot.png" alt="blogspot" className="blogspot" />
      </div>

      <h1 >Unleash Your Creativity - Welcome to Blogspot! </h1>


      <h3>Hey there, fellow adventurers of Blogland!

        Prepare to embark on a thrilling journey filled with imagination, humor, and unbridled creativity. Welcome to Blogland, where words come to life, and ideas dance on the virtual stage.
        <br /><br /></h3>
      <p>Blast off your imagination;
        Strap on your creative helmets because Blogland is all about unleashing your wildest ideas. From out-of-this-world fiction to quirky how-to guides, this is your playground to let your imagination run free!</p>
        <div className="start-button-container">
        <Link to="/login" className="get-started-button">Get Started <span>&#10148;</span></Link>
      </div>
    </div>

    
  );
}

export default Start;