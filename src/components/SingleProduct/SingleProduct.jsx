import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    // FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useEffect,useState } from "react";
// import { useParams } from "react-router";
function SingleProduct() {
      // @ts-ignore
        // const [count,setCount] = useState(1)
        //     // @ts-ignore
            const [cartItem,setCartItem] = useState(null);
            useEffect(() => {
                const storeItem =localStorage.getItem("watch");
                // console.log("Stored Item:",storeItem);
                if(storeItem){
                    setCartItem(JSON.parse(storeItem))
                }
            }, []
            )
            useEffect(() => {
                // console.log("CartItem Updated:",cartItem)
                
            },[cartItem]
            )
            useEffect(() => {
                const handleStoreChange =()=>{
                    const storedItem =JSON.parse(localStorage.getItem("watch"))||[];
                    if(storedItem.length>0){
                        setCartItem(storedItem.at(-1))
                    }
                }
                
                handleStoreChange()
            window.addEventListener("storage",handleStoreChange);
                return ()=>{window.removeEventListener("storage",handleStoreChange)};
            },[]
            )
            // const {id}=useParams()
            // const [cartItem,setCartItem] = useState(null);
            // const [watch,setWatch]= useState(()=>{
            //     const storeItem =localStorage.getItem("watch");
            //     return storeItem ?JSON.parse(storeItem):[];
            // })
            // useEffect(()=>{
            //     const save =JSON.parse(localStorage.getItem("watch"))
            //     const found = save.find((item)=>item.id.toString()===id)
            //     setCartItem(found)
            // },[id])
            // useEffect(()=>{
            //     localStorage.setItem("watch",JSON.stringify(watch))
            // },[watch])
            // const handle = ()=>{
            //     if (watch) {
            //         const existingItems= JSON.parse(localStorage.getItem("watch"))||[];
            //         const isItemExist = existingItems.some((existingItems)=>existingItems.id === watch.id)
                    
            // if (isItemExist) {
            //     const updatedItem =[...existingItems,watch];
            //     setWatch(updatedItem)
            //     localStorage.setItem("watch",JSON.stringify(updatedItem))
            // }
            //     }
            // }
            // console.log(cartItem)
            // console.log(cartItem?.category[0])
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img width={500} src={`../../../public/${cartItem?.img}`} alt="" />

                    </div>
                    <div className="right">
                        <span className="name">{cartItem?.title}</span>
                        <span className="price">{cartItem?.price}</span>
                        <span className="desc">{cartItem?.dec}</span>
                        <div className="cart-buttons">
                            {/* <div className="quantity">
                                <span  onClick={() => {
                                if(count !=1){
                                    setCount(count =>count -1)
                                }
                        }
                        }>-</span>
                                <span>{count}</span>
                                <span
                                onClick={() => {
                                    if(count !=10){
                                        setCount(count =>count +1)
                                    }
                                }
                                }>+</span>
                            </div> */}
                            {/* <button onClick={() => {
                            
                            }
                            } className="add-to-card-button">
                                < FaCartPlus size={20} />
                                ADD TO CARD
                            </button> */}

                        </div>
                        <span className="divider"></span>
                    <div className="info-item">
                        <span className="text-bold">
                            Category:
                            <span>{cartItem?.category}</span>
                        </span>
                        <span className="text-bold">
                            share:
                            <span className="social-icons">
                                <FaFacebookF size={16} />
                                <FaTwitter size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                    </div>
                    </div>
                </div>
                <RelatedProducts cat={cartItem?.category[0]}/>
            </div>
        </div>
    )
}

export default SingleProduct
