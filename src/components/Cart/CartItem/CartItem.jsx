
import { MdClose } from "react-icons/md"
import "./CartItem.scss"
import { useEffect, useState } from "react"
import "./cartItem.scss";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function CartItem({setCart}) {
    // @ts-ignore
    // const [count,setCount] = useState(1);
        // @ts-ignore
    const [cartItem,setCartItem] = useState(null);
        useEffect(() => {
            const storeItem =localStorage.getItem("watch");
            if(storeItem){
                setCartItem(JSON.parse(storeItem))
            }
        }, []
        )
        useEffect(() => {
        },[cartItem]
        );
    return (
        <>
        
            <div className="cart-products">
            {cartItem&& typeof cartItem ==="object"&&Object.keys(cartItem).length>0&&cartItem.map((item,index)=>{
            return(
                <div key={index} className="cart-product">
                    <div className="img-container">
                        <img src={item?.img} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item?.title}</span>
                        <MdClose className="close-btn" onClick={() => {
                            const update = cartItem.filter(cart => cart.id !==item.id)
                            localStorage.setItem("watch",JSON.stringify(update))
                            setCartItem(update)
                        }
                        } />
                        {/* <div className="quantity-buttons">
                            <span onClick={() => {
                                if(count !=1){
                                    setCount(count =>count -1)
                                }
                            }
                            }>-</span>
                            <span>{count}</span>
                            <span onClick={() => {
                                if(count !=10){
                                    setCount(count =>count +1)
                                }
                            }
                            }>+</span>
                        </div> */}
                        <div className="text">
                            {/* <span>{count}</span>
                            <span>x</span> */}
                            <span className="highlight">{item.price}</span>
                        </div>
                    </div>
                </div>
            )
            }
    )} 
                <div className="cart-footer">
                            {/* <div className="subtotal"> */}
                                {/* <span className="text">Subtotal</span>
                                <span className="text total"></span> */}
                            {/* </div> */}
                            {/* <div > 
                                
                            </div> */}
                            <Link className="button" to="/Checkout" >
                                <button onClick={() => {
                            //   setShow(false)
                            setCart(false)
                            }
                            }
                                
                                className="checkout">Checkout</button>
                            </Link>
                        </div>
            </div>
        
        </>
    )
}
export default CartItem
