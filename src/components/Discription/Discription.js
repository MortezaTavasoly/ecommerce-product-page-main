import React from "react";
import "./discription.css";

export default function Discription({ add, setAdd, numbers, setNumbers }) {
  const handleClick = (e) => {
    setAdd(false);

    if (e === "add") {
      setNumbers((prev) => {
        return prev + 1;
      });
    } else if (numbers <= 0) {
      setNumbers(0);
    } else {
      setNumbers((prev) => {
        return prev - 1;
      });
    }
  };

  const handleAdd = () => {
    setAdd(true);
  };

  return (
    <div className="discription">
      <strong className="company-name">sneaker company</strong>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="product-info">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <div className="offer">
          <h3 className="offer-price">$125.00</h3>
          <p className="offer-percentage">50%</p>
        </div>
        <p className="price">$250.00</p>
      </div>

      <div className="buying-buttons">
        <div className="purchases-number">
          <button
            className="subtract btns"
            onClick={() => {
              handleClick("subtract");
            }}
          >
            -
          </button>
          <p className="number">{numbers}</p>
          <button
            className="add btns"
            onClick={() => {
              handleClick("add");
            }}
          >
            +
          </button>
        </div>
        <div className="add-to-cart" onClick={handleAdd}>
          <img src="/assets/icon-cart.svg" alt="cart-icon" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
}
