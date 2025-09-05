// @ts-nocheck
import { Link } from "react-router-dom";
import "./Products.scss";
import { myProjects } from "./myProjects";
import {  memo, useMemo } from "react";

// eslint-disable-next-line react/prop-types
const Products = memo(function Products({ innerPage, headingTexy }) {
  const products = useMemo(() => myProjects, []);
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingTexy}</div>}
      <div className="products">
        {products.map((item) => (
          <Link
            key={item.id}
            className="link lin"
            to={`/product/${item.id}`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });

              // handleClick(item);
            }}
          >
            <div className="product-card">
              <div className="thumbnail">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ objectFit: "contain" }}
                  height={180}
                  width={180}
                  loading="lazy"
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="desc">{item.desc}</span>
                <span className="price">${item.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
})

export default Products;
