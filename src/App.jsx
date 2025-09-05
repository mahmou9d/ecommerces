import Loader from "./components/Loader";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/header/Header";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Home = React.lazy(() => import("./components/Home/Home"));
const Checkout = React.lazy(() =>
  import("./components/Cart/CartItem/Checkout")
);
const Category1 = React.lazy(() => import("./components/Category/category1"));
const Category2 = React.lazy(() => import("./components/Category/category2"));
const Category3 = React.lazy(() => import("./components/Category/category3"));
const Category4 = React.lazy(() => import("./components/Category/Category4"));
const SingleProduct = React.lazy(() =>
  import("./components/SingleProduct/SingleProduct")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/Category1" element={<Category1 />} />
          <Route path="/Category2" element={<Category2 />} />
          <Route path="/Category3" element={<Category3 />} />
          <Route path="/Category4" element={<Category4 />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Newsletter />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
