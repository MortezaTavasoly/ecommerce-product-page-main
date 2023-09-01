import React from "react";
import "./productImages.css";
import { useNavigate } from "react-router-dom";

export default function ProductImages({ images, image, setImage }) {
  const navigate = useNavigate();

  const handleImage = (url) => {
    setImage(url);
  };
  const handleModal = () => {
    navigate("image");
  };

  return (
    <div className="product-imgs">
      <img src={image} alt="image 1" className="review" onClick={handleModal} />
      <div className="image-thumbnail">
        {images &&
          images.map((img) => (
            <img
              className={image === img ? "active" : ""}
              src={img}
              alt="thumbnail"
              key={img}
              onClick={() => handleImage(img)}
            />
          ))}
      </div>
    </div>
  );
}
