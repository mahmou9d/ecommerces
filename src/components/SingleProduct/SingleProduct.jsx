import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { myProjects } from "../Products/myProjects";
import Loader from "../../components/Loader";

const RelatedProducts = lazy(() => import("./RelatedProducts/RelatedProducts"));

function SingleProduct() {
  const { id } = useParams();

  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const found = myProjects.find((p) => p.id === id);
    console.log("Looking for product:", id, found);
    setCartItem(found || null);
  }, [id]);
  const [watch, setWatch] = useState(() => {
    try {
      const savedWatch = localStorage.getItem("watch");
      return savedWatch ? JSON.parse(savedWatch) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("watch", JSON.stringify(watch));
  }, [watch]);

  const handleClick = useCallback((item) => {
    setWatch((prevWatch) => {
      const isItemExist = prevWatch.some((i) => i.id === item.id);
      return isItemExist ? prevWatch : [...prevWatch, item];
    });
  }, []);

  if (!cartItem) {
    return <div className="loading">Product not found...</div>;
  }

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={`.${cartItem.img}`}
              alt={cartItem.title}
              height={400}
              width={600}
              loading="lazy"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="right">
            <span className="name">{cartItem.title}</span>
            <span className="price">${cartItem.price}</span>
            <span className="desc">{cartItem.desc}</span>

            <div className="cart-buttons">
              <button onClick={() => handleClick(cartItem)}>
                <FaShoppingCart />
                Add to Watch
              </button>
            </div>
            <span className="divider"></span>

            <div className="info-item">
              <span className="text-bold">
                Category: <span>{cartItem.category}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <Suspense fallback={<Loader/>}>
          <RelatedProducts cat={cartItem?.category} />
        </Suspense>
      </div>
    </div>
  );
}

export default SingleProduct;