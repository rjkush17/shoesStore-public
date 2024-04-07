import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card_image1 from "../images/sliderImg/card-image1.jpg";
import card_image2 from "../images/sliderImg/card-image2.jpg";
import card_image3 from "../images/sliderImg/card-image3.jpg";
import card_image4 from "../images/sliderImg/card-image4.jpg";
import card_image5 from "../images/sliderImg/card-image5.jpg";
import card_image6 from "../images/sliderImg/card-image6.jpg";
//animation librarly
import AOS from "aos";
import "aos/dist/aos.css";


import { useNavigate } from "react-router-dom";

function Sliders() {

  const [slides, setSlides] = useState(2);
  const navigate = useNavigate()

  const adjustSlides = () => {
    const width = window.innerWidth;
    if (width < 720) {
      setSlides(1);
    } else {
      setSlides(2);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', adjustSlides);
    adjustSlides();
      AOS.init({ offset: 200, duration: 600 });
    return () => window.removeEventListener('resize', adjustSlides);
  }, []); 

      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              padding: "10px",
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        )
      };

  return (
       <Slider {...settings} className="w-11/12 mx-auto mt-10 mb-20">
    {/* div 1 */}
    <div className="h-[400px] mobile:h-[600px]"  data-aos="fade-right">
      <div
        className="bg-cover bg-center h-full rounded-[15px] overflow-hidden relative"
        style={{ backgroundImage: `url(${card_image1})` }}
      >
        <div className=" absolute bottom-10 left-10 mobile:bottom-20 mobile:left-20 leading-9 text-white">
          <h1>Stylish shoes for</h1>
          <h1>Women</h1>
          <button  onClick={()=>navigate("/shop/women")} className="w-fit uppercase leading-6">
            shop Now
            <hr className="border border-white" />
          </button>
        </div>
      </div>
    </div>

    {/* div2 */}
    <div className="h-[400px] mobile:h-[600px]">
      <div
        className="bg-cover bg-center h-[48%] rounded-[15px] overflow-hidden mb-[4%] relative"
        style={{ backgroundImage: `url(${card_image2})` }}
        data-aos="fade-down"
      >
          <div className="absolute bottom-6 mobile:bottom-12 left-6 mobile:left-12 leading-9 text-white">
          <h1>Sport wear</h1>
          <button  onClick={()=>navigate("/shop/sports")} className="w-fit uppercase leading-6">
            shop Now
            <hr className="border border-white" />
          </button>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-[48%] rounded-[15px] overflow-hidden relative"
        style={{ backgroundImage: `url(${card_image3})` }}
        data-aos="fade-up"
      >
        <div className="absolute bottom-6 mobile:bottom-12 left-6 mobile:left-12 leading-9 text-white">
          <h1>Fashion Shoes</h1>
          <button className="w-fit uppercase leading-6"  onClick={()=>navigate("/shop/fashion")}>
            shop Now
            <hr className="border border-white" />
          </button>
        </div>
      </div>
    </div>

       {/* div 3 */}
       <div className="h-[400px] mobile:h-[600px] ">
      <div
        className="bg-cover bg-center h-full rounded-[15px] overflow-hidden relative"
        style={{ backgroundImage: `url(${card_image4})` }}
      >
        <div className=" absolute bottom-10 left-10 mobile:bottom-20 mobile:left-20 leading-9 text-white">
          <h1>Stylish shoes for</h1>
          <h1>Men</h1>
          <button className="w-fit uppercase leading-6"  onClick={()=>navigate("/shop/men")}>
            shop Now
            <hr className="border border-white" />
          </button>
        </div>
      </div>
    </div>

    {/* div 4 */}
    <div className="h-[400px] mobile:h-[600px]">
      <div
        className="bg-cover bg-center h-[48%] rounded-[15px] overflow-hidden mb-[4%] relative"
        style={{ backgroundImage: `url(${card_image5})` }}
      >
          <div className=" absolute   bottom-6 mobile:bottom-12 left-6 mobile:left-12 leading-9 text-white">
          <h1>Men Shoes</h1>
          <button className="w-fit uppercase leading-6" onClick={()=>navigate("/shop/men")}>
            shop Now
            <hr className="border border-white" />
          </button>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-[48%] rounded-[15px] overflow-hidden relative"
        style={{ backgroundImage: `url(${card_image6})` }}
      >
        <div className=" absolute  bottom-6 mobile:bottom-12 left-6 mobile:left-12 leading-9 text-white">
          <h1>Women Shoes</h1>
          <button className="w-fit uppercase leading-6"  onClick={()=>navigate("/shop/women")}>
            shop Now
            <hr className="border border-white" />
          </button>
        </div>
      </div>
    </div>
  </Slider>
  )
}

export default Sliders