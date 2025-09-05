import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import "./Header.scss";
import { lazy, Suspense, useState } from "react";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
const Cart = lazy(() => import("../Cart/Cart"));
function Header() {
  const nav = useNavigate();
  const [cartItem, setCartItem] = useState(null);
  useEffect(() => {
    const storeItem = localStorage.getItem("watch");
    if (storeItem) {
      setCartItem(JSON.parse(storeItem));
    }
  }, []);
  const handleStoreChange = () => {
    const updatedItem = localStorage.getItem("watch");
    if (updatedItem) {
      setCartItem(JSON.parse(updatedItem));
    } else {
      setCartItem([]);
    }
  };
  useEffect(() => {
    window.addEventListener("storage", handleStoreChange);
    return () => {
      window.removeEventListener("storage", handleStoreChange);
    };
  });
  useEffect(() => {
    const setItem = localStorage.setItem;
    localStorage.setItem = function (k) {
      setItem.apply(this, arguments);
      if (k == "watch") {
        handleStoreChange();
      }
    };
  }, []);
  const [showCart, setShowCart] = useState(false);
  const [heart, setHeart] = useState(false);

  return (
    <>
      {/* <Link to={"/"}> */}
      <header className={`main-header`}>
        <div className="header-content">
          <ul className="left">
            <li
              onClick={() => {
                window.scrollTo(0, 0);
                nav("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                window.scrollTo(0, 5500);
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                window.scrollTo(0, 600);
              }}
            >
              Category
            </li>
          </ul>

          <div className="center">
            <div className="matrix-container">
              <h1
                onClick={() => {
                  window.scrollTo(0, 0);
                  nav("/");
                }}
                className="matrix-text"
                data-text="M%MSTORE"
              >
                M%MSTORE
              </h1>
              <div className="rain"></div>
            </div>
          </div>
          <div className="right">
            <div
              onClick={() => {
                setHeart((prev) => !prev);
              }}
            >
              {heart ? (
                <IoIosHeart className="heart" style={{ color: "blue" }} />
              ) : (
                <FaRegHeart className="heart" />
              )}
            </div>

            <span
              className="cart-icon"
              onClick={() => {
                setShowCart((prev) => !prev);
              }}
            >
              <FaShoppingCart />
              <span>{cartItem?.length ||0}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && (
        <Suspense fallback={<Loader/>}>
          <Cart />
        </Suspense>
      )}
      {/* </Link> */}
    </>
  );
}

export default Header;
