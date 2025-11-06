import React from "react";
import "./About.css";

const About =(props) => {
    return(
       <React.Fragment>
        <section className="container">
            <div>
                    {props.many.map((data , i) =>(
                    <div key={i} className="row">
                         <div className="text-center text-md-start col-md-6 mt-5">   
                             <p className="para22 ">{data.aboutname}</p>
                             <h1 className="para81 ">{data.abouth1}</h1>
                             <p className="para55 mt-3">{data.aboutp}</p>
                             <button type="button" className="btn">{data.aboutbuttom}</button>
                        </div>
                        <div className="text-center mt-5 col-md-6">
                            <img src={data.aboutimg} alt="" className="img-fluid aboutimg" />
                        </div>
                    </div>
                    ))

                    }

              
            </div>
        </section>

       </React.Fragment>

    )
}
 export default About; 