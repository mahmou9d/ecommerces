/* eslint-disable no-unused-vars */
// @ts-nocheck

// import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Cart() {
    const [show,setShow]=useState(true);


    return (
        <div>
            {show&&
            <div className="cart-panel">
        
            <div className="opac-layer"></div>
           
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => {
                        setShow(false)
                    }
                    }>
                        <MdClose className="close"/>
                        {/* <span className="text">close</span> */}
                    </span>
                </div>
                {/* <div className="empty-cart">
                    <BsCartX/>
                    <span>no product in the cart.</span>
                    <button className="return">Return to shop</button>
                </div> */}
                    
                    <CartItem setCart={setShow}/>
                    
                    
            </div>
            
            
            
            
        </div>
            
            }


        </div>
        
    )
}

export default Cart
