// import { MdClose } from "react-icons/md"
// import "./Search.scss"
// import Header from "../Header"
// // import { useEffect, useState } from "react";
// import { myProjects } from "../../Products/myProjects";
// // import { useEffect } from "react";
// // eslint-disable-next-line react/prop-types
// function Search({setShowSearch}) {
//     // const [watch,setWatch]=useState(() => {
//     //         const savedwatch =
//     //             localStorage.getItem("watch");
//     //         return savedwatch ?JSON.parse(savedwatch):{};
            
            
            
//     //     }
//     //     );
            
    
//     // useEffect(() => {
//     //         localStorage.setItem("watch",JSON.stringify(watch))
            
//     //         }
//     //         ,[watch])
//     //         // console.log(watch);console.log(watch)
//     // // const handlAddToCart = (item) =>{
//     // //     setWatch((prevWatch) => {
//     // //         const updatedWatch = [...prevWatch,item];
//     // //         localStorage.setItem("watch",JSON.stringify(updatedWatch));
//     // //         return updatedWatch;
//     // //     })
//     // // }
    
//     //         // const handleclick = (item)=>{
//     //         //     localStorage.setItem("watch", JSON.stringify(item));
//     //         //     setWatch(item)
//     //         //     // window.location.reload();
//     //         //     window.dispatchEvent(new Event("storage"))
                
//     //         // }
//     //         const handleclick =(item)=>{console.log("good",item)
//     //             const existingItems = JSON.parse(localStorage.getItem("watch"))||[];
//     //             const isItemExist = existingItems.some((existingItems)=>existingItems.id === item.id)
//     //             if(!isItemExist){
//     //                 const updatedItem=[...existingItems,item];
                
                
//     //             localStorage.setItem("watch",JSON.stringify(updatedItem))
//     //             // if(updatedItem){
//     //             //     setCartItem(JSON.parse(updatedItem))
//     //             // }
//     //             setWatch(updatedItem)
                
//     //         }else{console.log("object")}
//     //     window.dispatchEvent(new Event("storage"))
//     //     }
//     //         useEffect(() => {
//     //             setWatch(JSON.parse(localStorage.getItem("watch"))||[])
//     //         }
//     //         ,[])
//     console.log(JSON.stringify(myProjects))
//     return (
//         <>
//         <div className="pro">
//         <Header/>
//         </div>
//         <div className="search-modal">
//             <div className="form-field">
//                 <input type="text" autoFocus placeholder="search for products" />
//                 <MdClose onClick={() => {
//                     setShowSearch(false)
//                 }
//                 }/>
//             </div>
//         {myProjects&& typeof myProjects ==="object"&&Object.keys(myProjects).length>0&&myProjects.map((item,i) =>{
//                         return(
//         <div key={i} onClick={() => {
//                         window.scrollTo(0,0)
                
//                         }} className="search-result-content">
//             <div className="search-reults">
//                 <div className="search-result-item">
//                     <div className="image-container">
//                         <img width={200} src={item?.img} alt="" />
//                     </div>
//                     <div className="prod-details">
//                         <span className="name">{item?.title}</span>
//                         <span className="desc">{item.desc}</span>
//                         <span className="name">{item?.price}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//                 );
//             } )}
//     </div>
//         </>
//     )
// }

// export default Search
