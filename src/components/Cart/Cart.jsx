// @ts-nocheck
import { MdClose } from "react-icons/md";
import "./Cart.scss";
import { lazy, Suspense, useState } from "react";
import Loader from "../../components/Loader";
const CartItem = lazy(() => import("./CartItem/CartItem"));
function Cart() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <div className="cart-panel">
          <div className="opac-layer" onClick={() => setShow(false)}></div>

          <div className="cart-content">
            <div className="cart-header">
              <span className="heading">Shopping Cart</span>
              <span
                className="close-btn"
                onClick={() => {
                  setShow(false);
                }}
              >
                <MdClose className="close" />
              </span>
            </div>
            <Suspense fallback={<Loader />}>
              <CartItem setCart={setShow} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
