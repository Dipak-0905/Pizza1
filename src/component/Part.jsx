import React from "react";
import ReactDOM from "react-dom/client";
import "./Part.css"

const Part = (props) => {
    return (
        <React.Fragment>
            <section className="image5  d-lg-block"></section>
            <section className=" image7">
                <div className="container ">
                    <div className="row text-center">
                        {props.Imgitems.map((dish, i) => (
                                <div className="col-lg-4 col-md-6 mb- mt-5" key={i}>
                                    <img src={dish.itemPath} alt="" className="img " />
                                    <h1 className="heading-1 mt-3 text-center"><b>{dish.itemHeading}</b></h1>
                                    <p className="para-1 text-center m-3 ">{dish.itemPara}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <section className="image8"></section>
        </React.Fragment>
    )
}
export default Part;
