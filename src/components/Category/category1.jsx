

// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { myProjects } from "../Products/myProjects";
import "./Category.scss";
import { Link } from "react-router-dom";

function Category() {
    
//         const [watch,setWatch]=useState(() => {
//             const savedwatch =
//                 localStorage.getItem("watch");
//             return savedwatch ?JSON.parse(savedwatch):{};
            
            
            
//         }
//         );
            
    
//     useEffect(() => {
//             localStorage.setItem("watch",JSON.stringify(watch))
            
//             }
//             ,[watch])
// const handleclick =(item)=>{console.log("good",item)
//             const existingItems = JSON.parse(localStorage.getItem("watch"))||[];
//             const isItemExist = existingItems.some((existingItems)=>existingItems.id === item.id)
//             if(!isItemExist){
//                 const updatedItem=[...existingItems,item];
            
            
//             localStorage.setItem("watch",JSON.stringify(updatedItem))
//             // if(updatedItem){
//             //     setCartItem(JSON.parse(updatedItem))
//             // }
//             setWatch(updatedItem)
            
//         }else{console.log("object")}
//     window.dispatchEvent(new Event("storage"))
//     }
//         useEffect(() => {
//             setWatch(JSON.parse(localStorage.getItem("watch"))||[])
//         }
//         ,[])

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




















    const earbuds =myProjects.filter( myProject => myProject.category == "earbuds");
    return (
        <div className="category-main-content">
            
            <div className="layout">
                <div className="category-title">earbuds</div>
                <div className="class">
                {earbuds.map((item) =>{
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

                        <div className="product-card">
                                        <div className="thumbnail">
                                                <img src={item.img} alt="" />
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

        </div>
    )
}

export default Category