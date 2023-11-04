import React, { useState, useEffect } from 'react'

function ScrollingPics() {
  const [images] = useState([
        "MenuImages/breakfast.jpg",
        "MenuImages/omelette.jpg",
        "MenuImages/pasta.jpg",
        "MenuImages/fishChips.jpg",
        "MenuImages/iceCream.jpg",
        "MenuImages/cheesecake.jpg"
      ]);
      
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const timerID = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex +1) % images.length);
        }, 5000);
  
      return () => {
        clearInterval(timerID);
      };
    }, [images]);
return (
    <div className="images" >
      <img src={images[currentImageIndex]} alt="Menu Items" width="50%"/>
      <caption>All images found on unsplash.com</caption>
    </div>

  );
}

export default ScrollingPics