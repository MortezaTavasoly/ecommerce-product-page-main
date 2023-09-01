import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ images, image }) {
  const [showImage, setShowImage] = useState(image);

  const navigate = useNavigate();
  const handleImage = (url) => {
    setShowImage(url);
  };
  const handleClick = () => {
    navigate("/");
  };
  const handleRight = () => {
    setShowImage((e) => {
      if (images.indexOf(e) === 3) {
        return images[0];
      } else {
        return images[images.indexOf(e) + 1];
      }
    });
  };
  const handleLeft = (e) => {
    setShowImage((e) => {
      if (images.indexOf(e) === 0) {
        return images[3];
      } else {
        return images[images.indexOf(e) - 1];
      }
    });
  };
  return (
    <div className="modal">
      <div className="product-imgs">
        <img
          src="/assets/icon-close.svg"
          alt="close"
          className="close"
          onClick={handleClick}
        />
        <div className="left" onClick={handleLeft}>
          <img src="/assets/icon-previous.svg" alt="left" />
        </div>
        <div className="right" onClick={handleRight}>
          <img src="/assets/icon-next.svg" alt="right" />
        </div>
        <img src={showImage} alt="image" className="review" />
        <div className="image-thumbnail">
          {images &&
            images.map((img) => (
              <div className="thumbnail-container" key={img}>
                <img
                  className={showImage === img ? "active" : ""}
                  src={img}
                  alt="thumbnail"
                  onClick={() => {
                    handleImage(img);
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
