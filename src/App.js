import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductImages from "./components/ProductImages/ProductImages";
import Discription from "./components/Discription/Discription";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [images, setImages] = useState([
    "./assets/image-product-1.jpg",
    "./assets/image-product-2.jpg",
    "./assets/image-product-3.jpg",
    "./assets/image-product-4.jpg",
  ]);
  const [image, setImage] = useState("./assets/image-product-1.jpg");
  const [numbers, setNumbers] = useState(0);
  const [add, setAdd] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/image"
            element={
              <Modal image={image} setImage={setImage} images={images} />
            }
          />
        </Routes>

        <Navbar
          add={add}
          numbers={numbers}
          setNumbers={setNumbers}
          image={image}
        />
        <div className="line"></div>
        <div className="product">
          <ProductImages image={image} setImage={setImage} images={images} />
          <Discription
            numbers={numbers}
            setNumbers={setNumbers}
            add={add}
            setAdd={setAdd}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
