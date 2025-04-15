
import "./RelatedProducts.scss";
import { myProjects } from "../../Products/myProjects";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// console.log(myProjects[0].category)
// eslint-disable-next-line react/prop-types
function RelatedProducts({cat}) {
    const data =myProjects.filter( myProject => myProject.category == cat);
    // nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

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


    // nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
    // const earbuds =myProjects.filter( myProject => myProject.category === "headphone");
    console.log(data,"vvvvvvvvvvvvvvvvvvv",cat)
    return (
        
        <div className="related-products">
            <div className="sec-heading">Related Product</div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                 { data.map((item) =>{
                return(

                    <Link  key={item.id} className="link lin add" to={`/product/${item.id}`}
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
                    <div key={item.id} className="product-card cards">
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
    )
}

export default RelatedProducts
