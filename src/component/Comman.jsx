import React from "react";
import "./Comman.css"

const Comman = (props) =>{
    return(
        <React.Fragment>
            <section className="container">
                <p className="text-center para22">{props.old2}</p>
                <h1 className="text-center para80">{props.para33}</h1>
                <div className="row">
                    {props.costom.map((data , i) =>(
                        <div key={i} className="col-md-4 comman ">
                              <div className="">
                                  <img src={data.costimg} alt=""  className="mt-3 img-fluid "/>
                                 <div className="d-flex  ">
                                     <a href="" className=" comman44">{data.costa}</a> 
                                  <p className="px-3">{data.costp}</p>
                                 </div>
                                  <h6 className="comman2">{data.costh1}</h6>
                                  <a href="" className="atag">{data.btn44}</a>
                              </div>
                           

                        </div>
                    ))

                    }
                </div>
            </section>
        </React.Fragment>

    )
}
export default Comman;