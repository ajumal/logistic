

import React from 'react'
import Slider from "react-slick";


const Brand = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
       
      };
    return (
        <>
            <section className="partnersbg pt-5 pb-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center pt-4 pb-4">
                            <h5 className="heading_fs">Brands that Trust us</h5>
                            
                        </div>
                            <div className="col-lg-12 text-center">
                                <Slider {...settings}>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/Glow.png" alt=""/>
                                    </div>
                                </div>
                                
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/played.png" alt="" />
                                    </div>
                                </div> 
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/bio-solutions.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/custKart.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/cosrei.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/studio.png" alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand
