import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
import Cart from "../Cart/Cart";
import "./Header.scss";
import { useState } from "react";
// import Search from "./Search/Search";
import { Link } from "react-router-dom";
import { useEffect } from "react";
    function Header() {
                    // @ts-ignore
            const [cartItem,setCartItem] = useState(null);
            useEffect(() => {
                const storeItem =localStorage.getItem("watch");
                if(storeItem){
                    setCartItem(JSON.parse(storeItem))
                    
                }
            }, []
            )
                const handleStoreChange =()=>{
                    const updatedItem= localStorage.getItem("watch")
                    if(updatedItem){
                        setCartItem(JSON.parse(updatedItem))
                    }else{
                        setCartItem([])
                    }
                }
            useEffect(() => {
                window.addEventListener("storage",handleStoreChange);
                return ()=>{window.removeEventListener("storage",handleStoreChange)};
            })
            useEffect(() => {
                const setItem =localStorage.setItem;
                localStorage.setItem=function (k) {
                    setItem.apply(this,arguments)
                    if(k=="watch"){
                        handleStoreChange()
                    }
                }
            },[]
            )
        const [showCart,setShowCart] = useState(false);
        const [heart,setHeart]=useState(false)
        // const [showsearch,setShowSearch] = useState(false);
    return (
        <>
        <Link to={"/"}>
        
        <header className={`main-header`}>
            <div className="header-content">
                <ul className="left">
                <li   onClick={() => {
                            window.scrollTo(0, 0);
                        }
                        } >Home</li>
                <li   onClick={() => {
                            window.scrollTo(0, 5500);
                        }
                        } >About</li>
                <li   onClick={() => {
                            window.scrollTo(0, 600);
                        }
                        } >Category</li>
                </ul>
            
            <div className="center">
            <div className="matrix-container">
                <h1 onClick={() => {
                            window.scrollTo(0, 0);
                        }
                        }  className="matrix-text" data-text="M%MSTORE">M%MSTORE</h1>
                <div className="rain"></div>
            </div>
                
            </div>
            <div className="right" >
            {/* <span onClick={() => {
                        if(showsearch == false && showCart==false){
                        setShowSearch(true)
                        
                    }else{
                        setShowSearch(false)
                        
                    }
            }}>
            <CiSearch />
            </span> */}
            <div onClick={()=>{
                if(heart===false){
            setHeart(true)
                }else{
                    setHeart(false)
                }
            }
            }>
                {heart?<IoIosHeart className="heart"  style={{color:"blue"}}/> :<FaRegHeart className="heart"/>}
            </div>
            
            <span className="cart-icon" onClick={() => {
                if(showCart == false/* && showsearch==false*/){
                    setShowCart(true)
                    
                }else{
                    
                    setShowCart(false)
                    
                }
            }
            }>
            <FaShoppingCart />
            <span>{cartItem?.length}</span>
            </span>
            </div>
</div>
        </header>
        {showCart &&   <Cart/>}
        {/* {showsearch && <Search setShowSearch={setShowSearch}/>} */}
        </Link>
        
        </>
        
    )
    }

export default Header
