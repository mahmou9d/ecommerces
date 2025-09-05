import { Link } from "react-router-dom";
import "./Category.scss";

function Category() {
  const categories = [
    { path: "/category1", img: "/img/earbuds_result.webp" },
    { path: "/category2", img: "/img/head phone_result.webp" },
    { path: "/category3", img: "/img/speaker_result.webp" },
    { path: "/category4", img: "/img/smartwatch_result.webp" },
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map((cat, i) => (
          <div className="category" key={i}>
            <Link className="cat" to={cat.path} onClick={scrollTop}>
              <img
                src={cat.img}
                alt={`category-${i + 1}`}
                height={150}
                width={290}
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
