// @ts-nocheck

import { memo } from "react";
import { myProjects } from "../Products/myProjects";
import "./Category.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TotalCategory = memo(function TotalCategory({ title }) {
  const filter = myProjects.filter((myProject) => myProject.category == title);
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{title}</div>
        <div className="class">
          {filter.map((item) => {
            return (
              <Link
                key={item.id}
                className="link lin"
                to={`/product/${item.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="product-card">
                  <div className="thumbnail">
                    <img
                      src={item.img}
                      alt="product"
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
            );
          })}
        </div>
      </div>
    </div>
  );
})

export default TotalCategory;
