import React from "react";
import "./Header.css";

let Header = (props) => {
    return (
        <React.Fragment>
            <section className="header-section container-fluid">
                <div id="myslider" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myslider" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#myslider" data-bs-slide-to="1" ></button>
                    </div>
                    <div className="carousel-inner">
                        {props.slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="container mt-4">
                                    <div className=" row">
                                        <div className="col-lg-6  col-md-12 text-md-center heading-1 mt-5 ">
                                            <h1 className="header-h1 mt-md-4 text-lg-start">{slide.carouselh1}</h1>
                                            <p className="header-welcome text-lg-start">{slide.carouselpara}</p>
                                        </div>
                                        <div className="col-lg-6 imgcarousel">
                                            <img src={slide.carouselImg} className="d-block image img-fluid " alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))};
                    </div>
                    <button type="button" data-bs-target="#myslider" className="carousel-control-prev" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button type="button" data-bs-target="#myslider" className="carousel-control-next" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header;