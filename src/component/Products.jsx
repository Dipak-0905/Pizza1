import React from "react";
import "./Products.css"

const Products = (props) => {
    return (
        <React.Fragment>
            <section className="container-fluid mt-5">
                <div className="text-center">
                    <p className="para2">{props.Product3}</p>
                    <h1 className="para4">{props.Product2}</h1>
                </div>
                <div className="row">
                    {props.Products.map((link, i) => (
                        <div key={i} className="col-lg-4 col-md-4 ps-md-5">
                            <div className="col-lg-6  text-center mt-4" >
                                <img src={link.Productimg} alt="" className=" imag" />
                                <div className="mt-3   ">
                                    <figcaption className="captionlogo ">{link.caption}</figcaption>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="text-center mt-5">
                <button type="button" className="btn btn-outline-warning">{props.Btn}</button>
            </div>
        </React.Fragment>
    )
}
export default Products;