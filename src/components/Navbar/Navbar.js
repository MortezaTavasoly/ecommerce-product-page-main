import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ image, numbers, setNumbers, add }) {
  const [cart, setCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleShowImage = () => {
    setCart(false);
    navigate("/image");
  };

  const handleMenu = () => {
    console.log(showMenu);
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <div className="navbar">
      <div className="menu">
        <img
          src="/assets/icon-menu.svg"
          alt="menu-icon"
          className="menu-img"
          onClick={handleMenu}
        />
        <div
          className="menu-links"
          style={showMenu ? { display: "flex" } : { display: "none" }}
        >
          <img
            src="/assets/icon-close.svg"
            alt="close-img"
            className="close-img"
            onClick={handleMenu}
          />
          <NavLink to={"/"} className={"link"}>
            Collections
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Man
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Woman
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            About
          </NavLink>
          <NavLink to={"/"} className={"link"}>
            Contact
          </NavLink>
        </div>
      </div>
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="links">
        <NavLink to={"/"} className={"link"}>
          Collections
        </NavLink>
        <NavLink to={"/"} className={"link"}>
          Man
        </NavLink>
        <NavLink to={"/"} className={"link"}>
          Woman
        </NavLink>
        <NavLink to={"/"} className={"link"}>
          About
        </NavLink>
        <NavLink to={"/"} className={"link"}>
          Contact
        </NavLink>
      </div>
      <div className="cart">
        {numbers !== 0 && add && <p>{numbers}</p>}
        <img
          src="/assets/icon-cart.svg"
          alt="cart"
          onClick={() => {
            cart ? setCart(false) : setCart(true);
          }}
        />
        {cart && (
          <div className="dropedown">
            <strong className="card-title">Card</strong>
            <div className="card-line"></div>

            {numbers && add && (
              <div className="list">
                <div className="list-items">
                  <img src={image} alt="image" onClick={handleShowImage} />
                  <div className="cost">
                    <strong>Fall Limited Edition Sneakers</strong>
                    <div>
                      $125.00 x {numbers} <strong>${125 * numbers}.00</strong>
                    </div>
                  </div>
                  <img
                    src="./assets/icon-delete.svg"
                    alt="delete"
                    className="delete"
                    onClick={() => setNumbers(0)}
                  />
                </div>
                <button className="checkout-btn">Checkout</button>
              </div>
            )}
            {!numbers && <div className="empty">Your cart is empty</div>}
            {!add && (
              <div className="empty">Please press add to card button</div>
            )}
          </div>
        )}
      </div>
      <div className="profile">
        <img src="/assets/image-avatar.png" alt="profile" />
      </div>
    </div>
  );
}
