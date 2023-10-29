import React, {useState} from 'react'


function MenuItem({ menu, extraMenu, price }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div
      className={`menuItem ${isEnlarged ? 'enlargedMenuItem' : ''}`}
      onClick={toggleEnlarged}
    >
      <div className="bold" >{menu}<br /></div>
      {isEnlarged && (
        <div>{extraMenu}<br />{price}</div>
      )}
    </div>
  );
}



export default MenuItem