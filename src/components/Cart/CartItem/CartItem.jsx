// @ts-nocheck
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { memo, useEffect, useState } from "react";
import "./cartItem.scss";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CartItem = memo(function CartItem({ setCart }) {
  const [cartItem, setCartItem] = useState(null);
  useEffect(() => {
    const storeItem = localStorage.getItem("watch");
    if (storeItem) {
      setCartItem(JSON.parse(storeItem));
    }
  }, []);
  return (
    <>
      <div className="cart-products">
        {cartItem &&
          typeof cartItem === "object" &&
          Object.keys(cartItem).length > 0 &&
          cartItem.map((item, index) => {
            return (
              <div key={index} className="cart-product">
                <div className="img-container">
                  <img
                    src={`.${item?.img}`}
                    alt="cart"
                    width={100}
                    height={60}
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item?.title}</span>
                  <MdClose
                    // className="close-btn"
                    onClick={() => {
                      const update = cartItem.filter(
                        (cart) => cart.id !== item.id
                      );
                      localStorage.setItem("watch", JSON.stringify(update));
                      setCartItem(update);
                    }}
                  />
                  <div className="text">
                    <span className="highlight">{item.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="cart-footer">
          <Link className="button" to="/Checkout">
            <button
              onClick={() => {
                setCart(false);
              }}
              className="checkout"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
});
export default CartItem;
