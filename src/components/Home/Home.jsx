import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";


// import { useEffect } from "react";
// import { fetchDataFromApi } from "../../utils/api";


function Home() {
    // const allProductsAPI = "products?populate=*";
    // const [myDate, setmyDate] = useState(allProductsAPI);

    // useEffect(()=>{
    //     getCategory()
    // },[])
    // const getCategory=()=>{
    //     fetchDataFromApi("/api/category?popular=*").then((res)=>console.log(res))
    // }
    return (
        <div className="home">
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <Category/>
            <Products headingTexy="Popular Products" innerPage={undefined}/>
            </div>
        </div>
        </div>
    )
}

export default Home
