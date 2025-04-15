

import "./Banner.scss";

function Banner() {

    return (
        <div className="hero-banner">
            <div className="content">
                <img className="img" src="./img/—Pngtree—laptop color illustration_13136754.png" alt="" />
                <div className="text-content wave-container">
                    
                    <h1 className="wave-text"><span>S</span><span>A</span><span>L</span><span>E</span><span>S</span></h1>
                    <p className="cursor typewriter-animation">
                    Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="cats">

                        <div
                            
                        onClick={() => {
                            window.scrollTo(0, 5500);
                        }
                        } className="banner-cate">Read More</div>
                        <div  onClick={() => {
                            window.scrollTo(0, 800);
                            
                        }} className="banner-cate v2">Shop Now</div>
                    </div>
                </div>
                <img src="./img/banner-img.png" alt="" />
            </div>
        
        </div>
    )
}

export default Banner
