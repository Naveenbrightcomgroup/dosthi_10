import "./style.css";
import React, { useState, useEffect } from 'react';


export default function RightHome({ user }) {
  const [currentAd, setCurrentAd] = useState(0);


  const advertisements = [
    {
      imageUrl: "https://i.pinimg.com/originals/7f/37/3d/7f373d8ac4c5c9f6c3948ed43c1f9360.jpg",
      linkUrl: "https://www.redbull.com/in-en/energydrink",
      title: 'Gives You Wiiings!',
      description: "Red Bull Energy Drink is appreciated worldwide by top athletes",
      buttonText: 'Shop Now'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/76/ab/66/76ab66a5e774d4deaf21ce7c02806a32.jpg',
      linkUrl: 'https://mcdelivery.co.in/menu/659-burgers-wraps" target="_blank" rel="noopener noreferrer',
      title: "Happy Meals",
      description: "Burgers for everyone",
      buttonText: "Order-Online"
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/f8/6f/08/f86f08623d55b79addd3072419fecc4c.jpg',
      linkUrl: 'https://www.jaguar.in/index.html" target="_blank" rel="noopener noreferrer',
      title: "New Arrival!",
      description: "Welcome to the new way to get behind the wheel of your dream vehicle.",
      buttonText: "Reserve Online"
    },
  ];


  // Function to handle slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd(currentAd => (currentAd + 1) % advertisements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="right_home">
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contact hover3">
            <div className="contact_img">
              <img src={user.picture} alt="" />
            </div>
            <span>
              {user.first_name} {user.last_name}
            </span>
          </div>
        </div>
      <div className="heading">Sponsored</div>
      </div>


      {/* Advertisement Slideshow */}


   
      <div className="advertisement-slideshow">
        <img src={advertisements[currentAd].imageUrl} alt="Advertisement" className="ad-image" />
        <div className="ad-content">
          <h3>{advertisements[currentAd].title}</h3>
          <p>{advertisements[currentAd].description}</p>
          <a href={advertisements[currentAd].linkUrl} target="_blank" rel="noopener noreferrer">
            <button className="learn-more-button">{advertisements[currentAd].buttonText}</button>
          </a>
        </div>
      </div>
    </div>
   
  );
}