import "./Banner.scss";

function Banner() {
  return (
    <div className="hero-banner">
      <div className="content">
        <img
          className="img"
          src="./img/—Pngtree—laptop color illustration_13136754_result.webp"
          alt="product"
          style={{ objectFit: "contain" }}
          height={250}
          width={250}
          loading="lazy"
        />
        <div className="text-content wave-container">
          <h1 className="wave-text">
            <span>S</span>
            <span>A</span>
            <span>L</span>
            <span>E</span>
            <span>S</span>
          </h1>
          <p className="cursor typewriter-animation">
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </p>
          <div className="cats">
            <button
              onClick={() => {
                window.scrollTo({ top: 5500, behavior: "smooth" });
              }}
              className="banner-cate"
            >
              Read More
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 800, behavior: "smooth" });
              }}
              className="banner-cate v2"
            >
              Shop Now
            </button>
          </div>
        </div>
        <img
          src="./img/banner-img_result.webp"
          alt="product"
          style={{ objectFit: "contain" }}
          height={212}
          width={212}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Banner;
