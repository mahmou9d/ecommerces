
import { Link } from "react-router-dom";
import "./Products.scss";
import { myProjects } from "./myProjects";
import {  useEffect, useState } from "react"
// eslint-disable-next-line react/prop-types
function Products({  innerPage,headingTexy }) {
    const [watch,setWatch]=useState(() => {
        const savedwatch =
            localStorage.getItem("watch");
        return savedwatch ?JSON.parse(savedwatch):[];
    }
    );
useEffect(() => {
        localStorage.setItem("watch",JSON.stringify(watch))
        }
        ,[watch])
        const handleclick =(item)=>{console.log("good",item)
            const existingItems= JSON.parse(localStorage.getItem("watch"))||[];
            const isItemExist = existingItems.some((existingItems)=>existingItems.id === item.id)
            let updatedItem ;
    if (isItemExist) {
        updatedItem = existingItems.filter((existingItems)=>existingItems.id === item.id)
    }else{
        updatedItem =[...existingItems,item];
    }
    setWatch(updatedItem)
    localStorage.setItem("watch",JSON.stringify(updatedItem))
    window.dispatchEvent(new Event("storage"))
    }
        useEffect(() => {
            const save = localStorage.getItem("watch")
            if(save){
                setWatch(JSON.parse(save))
            }
        }
        ,[])

    return (
            <>  
                <div className="products-container">
        { !innerPage && <div className="sec-heading">{headingTexy}</div>}
        <div className="products">
        { myProjects.map((item) =>{
                return(
                    <Link  key={item.id} className="link lin" to={`/product/${item.id}`}
                    onClick={() => {
                        window.scrollTo(0,0)
                        setWatch({
                            // @ts-ignore
                            id:item.id,
                            title:item.title,
                            img:item.img,
                            price:item.price,
                            dec:item.desc,
                            category:item.category
                        })
                        handleclick(item)
                        }}>
                    <div key={item.id} className="product-card">
                                    <div className="thumbnail">
                                            <img src={`../../../public/${item.img}`} alt="" />
                                    </div>
                                    <div className="prod-details">
                                        <span className="name">{item.title}</span>
                                        <span className="desc">{item.desc}</span>
                                        <span className="price">${item.price}</span>
                                    </div>
                    </div>
                    </Link>
                );
        } )}
        </div>
                </div>
            </>
    )
}

export default Products
     // if(updatedItem){
            //     setCartItem(JSON.parse(updatedItem))
            // }
        // console.log(watch);console.log(watch)
// const handlAddToCart = (item) =>{
//     setWatch((prevWatch) => {
//         const updatedWatch = [...prevWatch,item];
//         localStorage.setItem("watch",JSON.stringify(updatedWatch));
//         return updatedWatch;
//     })
// }

        // const handleclick = (item)=>{
        //     localStorage.setItem("watch", JSON.stringify(item));
        //     setWatch(item)
        //     // window.location.reload();
        //     window.dispatchEvent(new Event("storage"))
            
        // }