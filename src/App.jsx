
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import SingleProduct from "./components/SingleProduct/SingleProduct";

import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Category1 from "./components/Category/category1";
import Category2 from "./components/Category/category2";
import Category3 from "./components/Category/category3";
import Category4 from "./components/Category/Category4";
import Checkout from "./components/Cart/CartItem/Checkout";

function App() {
    
    
    return (
        <BrowserRouter>
            <AppContext>
            
                <Header />
                <Routes>
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Category1" element={<Category1 />} />
                    <Route path="/Category2" element={<Category2 />} />
                    <Route path="/Category3" element={<Category3 />} />
                    <Route path="/Category4" element={<Category4 />} />
                    <Route path="/product/:d" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
