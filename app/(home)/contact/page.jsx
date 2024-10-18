import React from 'react'

export default function page() {
  return (
    <div className="untree_co-section mt-5" >
      <div className="container">

        <div className="row mb-5">
          <div className="col-lg-4 mb-5 order-2 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-info">

              <div className="row mt-4">
                <i className="icon col-2 fa fa-location rounded-5 text-center pt-3" style={{ backgroundColor: "#7B6ADA", color: "white", fontSize: "35px" }}></i>
                <div className="col-10">
                  <h4 className="mb-2">Location:</h4>
                  <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                </div>
              </div>

              <div className="row mt-4">
                <i className="icon col-2 fa fa-clock rounded-5 text-center pt-3" style={{ backgroundColor: "#7B6ADA", color: "white", fontSize: "30px", height: "100px" }}></i>
                <div className="col-10">
                  <h4 className="mb-2">Open Hours:</h4>
                  Sunday-Friday:<br />
                  11:00 AM - 2300 PM
                </div>
              </div>

              <div className="row mt-4">
                <i className="icon col-2 fa fa-mail-bulk rounded-5 text-center pt-3" style={{ backgroundColor: "#7B6ADA", color: "white", fontSize: "35px" }}></i>
                <div className="col-10">
                  <h4 className="mb-2">Email:</h4>
                  <p>info@Untree.co</p>
                </div>
              </div>
              <div className="row mt-4">
                <i className="icon col-2 fa fa-phone rounded-5 text-center pt-3" style={{ backgroundColor: "#7B6ADA", color: "white", fontSize: "35px" }}></i>
                <div className="col-10">
                  <h4 className="mb-2">Phone:</h4>
                  <p>+1 1234 55488 55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mr-auto order-1" data-aos="fade-up" data-aos-delay="200">
            <form action="#">
              <div className="row">
                <div className="col-6 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-6 mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-12 mb-3">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="col-12 mb-3">
                  <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                </div>

                <div className="col-12">
                  <input type="submit" value="Send Message" className="btn btn-primary" />
                </div>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  )
}
