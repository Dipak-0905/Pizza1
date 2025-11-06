import React from "react";
import "./Foodmenu.css"


const Foodmenu = (props) => {
  const NavItem = props.nav
  return (
    <React.Fragment>
      <section className="special "></section>
      <section className="special-color">
        <div className="text-center " >
          <p className="para2 ">{props.Item1}</p>
          <h1 className="para3">{props.Item2}</h1>
        </div>
        <nav className="container listitem list mt-5 ">
          <ul className="row   justify-content-center align-items-center list-unstyled ">
            {NavItem.map((link, i) => (
              <span key={i} className=" col-6 col-md-2   nav  ">
                <li className=" nav-item "><a href="" className={`linkitem nav-link  ${i == 0 ? "active" : ""}`}>{link}</a></li>
              </span>
            ))}
          </ul>
        </nav>
        <section className="container mt-5 ">
          <div className="row" >
            {
              props.Food.map((dish, i) => (
                <div className=" col-lg-3 col-md-4 text-center mt-3 mt-5" key={i}>
                  <img src={dish.dish1Img} alt={dish.dish1Name} className="img-fluid  imgfood" />
                <div>
                    <a className="para9">{dish.dish1Name}</a>
                     </div>
                  <span className="para6">{dish.dish1Fee}</span>
               
                  <p className="para2">{dish.dish1Price}</p>
                </div>
              ))
            }
          </div>
        </section>

        <section>
          <div className="text-center mt-3">
                <button type="button" className="btn ">{props.Btn}</button>
            </div>
        </section>
       
       <section className="none" >
        </section>
        
        </section>
    </React.Fragment>

  )
}

export default Foodmenu;
