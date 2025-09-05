import Loader from "../../components/Loader";
import "./Home.scss";
import { lazy, Suspense } from "react";
const Banner = lazy(() => import("./Banner/Banner"));
const Category = lazy(() => import("./Category/Category"));
const Products = lazy(() => import("../Products/Products"));
function Home() {
  return (
    <div className="home">
      <Suspense fallback={<Loader/>}>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category />
            <Products headingTexy="Popular Products" innerPage={undefined} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
