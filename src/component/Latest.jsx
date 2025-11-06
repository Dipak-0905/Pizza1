import React from "react";
import Slider from "react-slick";
import "./Latest.css";

const Latest = (props) => {
   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
   
  };
    return(
        <React.Fragment>
          <section className="infotech"></section>
            <section className=" info ">
                <div className="text-center ">
                    <p className="para22">{props.Infov}</p>
                    <h1 className="para80 text-light">{props.Infot}</h1>
                </div>
                <div className="container ">
                     <Slider {...settings}>
                    {props.Infotech.map((info , i )=>(
                   <React.Fragment key={i}>
                      <div className="d-md-flex mt-5 ">
                      <div className="text-center blog ms-2 px-3 mt-4">
                          <img src={info.infoimg} alt=""  className=" around  mt-5 "/> 
                        <a href="" className="text-decoration-none atag mt-3 ">{info.infoname}</a>
                      </div>
                         <div className="para67 p-5 mt-3 ">
                              <span className="para66">{info.infomation1}</span>
                         </div>
                           </div>
                       
                     
                  
                   </React.Fragment>
                
                    ))

                    }
                    </Slider>
                </div>
            </section>
            <section className="infotech2"></section>




        </React.Fragment>
    )

}
export default Latest;