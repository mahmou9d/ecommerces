

import { Link } from "react-router-dom";
import "./Category.scss";


// import { myProjects } from "../../Products/myProjects";


function Category() {
    
    // const nav= useNavigate()
    // const handleimageclick =()=>{
    //     nav(`/category1`)
    // }


    return (
        <div className="shop-by-category">
            <div className="categories">
            <div className="category">
                    <Link className="cat"  to="/category1"  onClick={() => {
                window.scrollTo(0,0)
            }
            }>
                    <img src="./img/earbuds.jpg" alt="" />
                    </Link>
                </div>
                <div className="category">
                <Link className="cat"  to="/category2"  onClick={() => {
                window.scrollTo(0,0)
            }
            }>
                    <img src="./img/head phone.jpg" alt="" />
                </Link>
                </div>
                <div className="category">
                <Link className="cat"  to="/category3"  onClick={() => {
                window.scrollTo(0,0)
            }
            }>
                <img src="./img/speaker.jpg" alt="" />
                </Link>
                    
                </div>
                <div className="category">
                <Link className="cat"  to="/category4"  onClick={() => {
                window.scrollTo(0,0)
            }
            }>
                <img src="./img/smartwatch.jpg" alt="" />
                </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Category
