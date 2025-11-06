import React from "react";
import "./Footer.css"



const Footer = (props) =>{
    return(
        <React.Fragment>
            <section className=" footer">
                <div className="container  ">
                  <div className="row top ">
                      {props.footer90.map((data , i) =>(
                        <React.Fragment key={i} className="">
                            <div className="col-md-4 mt-3">
                                <img src={data.footerlogo} alt="" />
                                <p  className=" footer5"    >{data.footerp}</p>
                                <a href="" className="nav-link footer5   ">{data.footerphone}</a>
                                <a href="" className="nav-link  footer5  ">{data. footera}</a>
                            </div>
                            <div className="col-md-4 mt-3">
                                <h4 className="text-light"   >{data.footerh1}</h4>
                                <p  className=" footer5" >{data.footerdate}</p>
                                <p  className=" footer5" >{data.footerdate2}</p>
                                <p  className=" footer5" >{data.footerdate4}</p>
                                <p  className=" footer5" >{data.footerdate3}</p>
                            </div>
                            <div className="col-md-4 mt-3">
                                <h4  className="text-light"   >{data.footerh2}</h4>
                                <a href="" className="nav-link  footer5">{data.footerh3}</a>
                                <a href="" className="nav-link footer5 ">{data.footerh4}</a>
                                <a href="" className="nav-link  footer5">{data.footerh5}</a>
                                <a href="" className="nav-link  footer5">{data.footerh6}</a>
                                <a href="" className="nav-link  footer5">{data.footerh7}</a>
                                <a href="" className="nav-link footer5 ">{data.footerh8}</a>
                            </div>
                        
                        </React.Fragment>
                    ))

                    }
                  </div>
                </div>
            </section>
        </React.Fragment>

    )
}
export default Footer;