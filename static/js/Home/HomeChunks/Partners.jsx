

import React from 'react'
import Slider from "react-slick";


const Partners = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
            <section className="partnersbg pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center pt-4 pb-4">
                            <h5 className="heading_fs">Our Courier Partners</h5>
                            <p>
                            YOLOJET’s reliable and renowned shipping partners ensure that your all kind of shipments are timely delivered with 
                            utmost safety and professionalism, in 27,000+ pin codes across India
                            
                            </p>
                        </div>
                        <div className="col-lg-12 text-center">
                                <Slider {...settings}>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/bluedart.png" alt="" />
                                    </div>
                            </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/delhivery.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/expressbee.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/dtdc.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/fast.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/gra.png" alt="" />
                                    </div>
                                </div> 
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/maruti.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/shadow.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/spoton.png" alt="" />
                                    </div>
                                </div>
                                <div className="item client-carousel">
                                    <div className="client-carousel-img">
                                        <img src="img/wowexpress.png" alt="" />
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

export default Partners
