import Logo from "../images/logo.svg";
import Avatar from "../images/image-avatar.png";
import { useState } from "react";

function Header({ cartcount, shownum, total }) {
  const [active, setActive] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <header>
      <div className="header__container">
        <div className="left">
          <button
            className={active ? "menu__btn close" : "menu__btn"}
            aria-labelledby="menu"
            onClick={() => setActive(!active)}
          >
            <span className="sr-only" id="menu">
              Menu
            </span>
          </button>
          <a href="#">
            <img src={Logo} alt="Logo" width="138" height="20" />
          </a>
          <nav className={active ? "show" : ""}>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <div
            className={shownum && cartcount > 0 ? "cart-box show" : "cart-box"}
            data-cart-items={cartcount}
          >
            <svg
              onClick={() => setCart(!cart)}
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill={cart ? "#000" : "#69707D"}
                fillRule="nonzero"
              />
            </svg>
          </div>
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className={cart ? "cart show" : "cart"}>
          <h3>Cart</h3>
          <div className="item">
            <div className="text__content">
              <div className="image"></div>
              <div className="text">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125,00 x {cartcount} <span>{`$${total.toFixed(2)}`}</span>
                </p>
              </div>
              <button className="delete"></button>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
