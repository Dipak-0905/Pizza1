import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"



function AutoPlay(props) {
  const settings = {
   
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
       {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
       {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
return(

 <React.Fragment>
  <section className="Top-image"></section>
    <section  className="slider  ">
       <div className="container">
        <div>
          <p className="para99 text-center">{props.new2}</p>
          <h1 className="text-center para88">{props.new1}</h1>
        </div>
      <Slider {...settings}>
         {
            props.root.map((image , i )=> (
           <div key={i} className="mt-5 box  ">
               <div className="mt-5 bg-light new  ">
                  <img src={image.carouselimage} alt="" className=" img-fluid iconimage "/>
                <div className="mt-3 ">
                    <h3 className="text-center para1 ">{image.Name}</h3>
                  <p className="text-center para6 mb-3 ">{image.buttomname}</p>
                </div>
               </div>
           </div>

            ))
           }
       
      </Slider>
    </div>
    </section>
    <section className="Bottom-image"></section>
 </React.Fragment>
  );
}

export default AutoPlay;