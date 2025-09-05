import "./RelatedProducts.scss";
import { myProjects } from "../../Products/myProjects";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function RelatedProducts({ cat }) {
  console.log(myProjects)
  const data = myProjects.filter((myProject) => myProject.category === cat);
  return (
    <div className="related-products">
      <div className="sec-heading">Related Product</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data.map((item) => {
          return (
            <Link
              key={item.id}
              className="link lin add"
              to={`/product/${item.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div key={item.id} className="product-card cards">
                <div className="thumbnail">
                  <img
                    src={`.${item.img}`}
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
  );
}

export default RelatedProducts;
