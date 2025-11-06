import React from "react";
import "./Booking.css"


const Booking = (props) =>{
    return(
        <React.Fragment>
            <section className="container">
                    <div className="row">
            { props.Book.map((book, i)=>(
                <React.Fragment  key={i}>
                     <div className="col-lg-6 col-md-6 text-center text-md-start " >
                    <p className="para2">{book.Specialone}</p>
                    <h1 className="para4">{book.heading}</h1>
                    <p className="para7">{book.bookingp}</p>
                    <div className="row">
                       <div className=" container d-flex align-content-center logoitem ms-3 ">
                        <img src={book.logo} alt="" className="logoimg" />
                          <span className=" mt-2 paratop text-light ">{book.bookingnumber}</span>
                       </div>
                     
                    </div>
                </div>
               <div className="col-lg-6 col-md-6 mt-5">
                   <h1 className="headingtopimg">{book.heading2}</h1>
                <form action="">
                    <div className="mt-3">
                        <input type="text"  className="form-control rounded-0 border border-3"  placeholder="Name"/>
                    </div>
                    <div className="mt-3">
                        <input type="text" className="form-control rounded-0 border border-3" placeholder="Email" />
                    </div>
                    <div className="mt-3">
                        <input type="text" className="form-control rounded-0"  placeholder="How many people"/>
                    </div>
                    <div className="mt-3">
                        <input type="text"  className="form-control rounded-0 border border-3" placeholder="Date"/>
                    </div>
                </form>
              <div className="">
                  <button className="button00 mt-3 ">{book.button55}</button>
              </div>

               </div>
                </React.Fragment>
            ))

            }
                    </div>
            </section>


        </React.Fragment>
    )
}
export default Booking;
