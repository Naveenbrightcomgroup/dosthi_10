import "./chatOnline.css";
import React, { useState, useEffect } from "react";

function ChatOnline() {
  const [currentAd, setCurrentAd] = useState(0);

  // List of advertisements
  const advertisements = [
    {
      imageUrl: "https://i.pinimg.com/originals/7f/37/3d/7f373d8ac4c5c9f6c3948ed43c1f9360.jpg",
      linkUrl: "https://www.redbull.com/in-en/energydrink",
      // title: "Gives You Wiiings!",
      // description: "Red Bull Energy Drink is appreciated worldwide by top athletes",
      buttonText: "Shop Now",
      isNew: true // Example: Indicates if the advertisement is new
    },
    {
      imageUrl: "https://i.pinimg.com/736x/f8/6f/08/f86f08623d55b79addd3072419fecc4c.jpg",
      linkUrl: "https://www.jaguar.in/index.html",
      // title: "New Arrival!",
      // description: "Welcome to the new way to get behind the wheel of your dream vehicle.",
      buttonText: "Reserve Online",
      isNew: false // Example: Indicates if the advertisement is new
    },
    {
      imageUrl: "https://i.pinimg.com/originals/cf/9e/d6/cf9ed6d7b60c4b3b92d7d9c694262e13.jpg",
      linkUrl: "https://www.lays.com/",
    }
  ];

  // Function to handle slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((currentAd + 1) % advertisements.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [currentAd, advertisements.length]);

  return (
    <div className="chatOnline">
      <div className="chatOnline_wrap">
        {/* Advertisement Slideshow */}
        <div className="advertisement-slideshow">
        {/* <h3>{advertisements[currentAd].title}</h3> */}
 <div className="heading">Sponsored</div>
        <a href={advertisements[currentAd].linkUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={advertisements[currentAd].imageUrl}
              className="chatOnline_image"
              alt="Advertisement"
            />
          </a>
          {/* Badge */}
          {advertisements[currentAd].isNew && (
            <div className="badge">New</div>
          )}
          {/* <a href={advertisements[currentAd].linkUrl} target="_blank" rel="noopener noreferrer">
            <button className="learn-more-button">{advertisements[currentAd].buttonText}</button>
          </a> */}

        </div>
        {/* <div className="chatOnline_name">{advertisements[currentAd].title}</div> */}
      </div>
    </div>
  );
}

export default ChatOnline;