"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import "@/app/globals.css";
import { GetCourses } from "./_lib/actions/CoursesUsecase";
import { Image } from "react-bootstrap";
import { getInstructor } from "./_lib/actions/UserUsecase";
import ServicesGridView from "./(components)/ServicesGridView";
import { GetServices } from "./_lib/actions/ServicesUsecase";
import { getEvents } from "./_lib/actions/eventsUsecase";


export default function Home() {
  const [services, setServices] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
   

    const getData = async () => {
      const res = await GetCourses();
      setCourses(res);
      setUsers(await getInstructor());
      setServices(await GetServices());
      setEvents(await getEvents());
      console.log(res);
    };

    getData();
  }, []);

  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link href={"/"} className="logo">
                  <h1 className="text-sm">IT Bangla LTD.</h1>
                </Link>

                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                      onClick="handle"
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <Link href={"/courses"}>Courses</Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  {<li className="scroll-to-section">
                    <Link href={"/event"}>Events</Link>
                  </li>}
                  <li className="scroll-to-section">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="scroll-to-section">
                    <Link href={"/signup"}>Register Now!</Link>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-banner">
                <div className="item item-1">
                  <div className="header-text">
                    <span className="category">Our Courses</span>
                    <h2>With IT Bangla LTD. Teachers, Everything Is Easier</h2>
                    <p>
                      IT Bangla LTD. is a technology company specializing in
                      software development and digital solutions, focusing on
                      innovative software applications, data analysis, and
                      enhancing business growth through technology-driven
                      services.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#">
                          <i className="fa fa-play"></i>{" "}
                          {"What's IT Bangla LTD.?"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-2">
                  <div className="header-text">
                    <span className="category">Best Result</span>
                    <h2>Get the best result out of your effort</h2>
                    {/* <p>You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.</p> */}
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#">
                          <i className="fa fa-play"></i> Whats the best result?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-3">
                  <div className="header-text">
                    <span className="category">Online Learning</span>
                    <h2>Online Learning helps you save the time</h2>
                    <p>
                      IT Bangla LTD. is a technology company specializing in
                      software development and digital solutions, focusing on
                      innovative software applications, data analysis, and
                      enhancing business growth through technology-driven
                      services.
                    </p>
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#">
                          <i className="fa fa-play"></i> Whats Online Course?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services section" id="services">
        <div className="container">


          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
            Services
          </h1>
          <div className="row event_box">
            {services &&
              services.slice(0, 3).map((service) => (
                <div
                  key={service.id}
                  className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design"
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="events_item">
                      <div className="thumb">
                        <div style={{ height: 220 }}>
                          <a href="#">
                            <Image
                              src={`${service.thumbnail}`}
                              style={{ objectFit: "cover" }}
                              height={220}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="down-content">
                        <span className="author">{service.description}</span>
                        <h4>{service.title}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="section about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-1">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Where shall we begin?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      IT Bangla Ltd, a <strong>leading</strong> provider of IT
                      education, international testing, and software solutions
                      in Dhaka, Bangladesh, boasts over 20 years of expertise.
                      Since its inception, the company has experienced
                      consistent growth, with a notable twelve percent annual
                      increase in enrollment.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do we work together?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Why IT Bangla LTD. is the best?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    {/* <div className="accordion-body">
                      There are more than one hundred responsive HTML templates to choose from <strong>Template</strong>Mo website. You can browse by different tags or categories.
                    </div> */}
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Do we get the best support?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    {/* <div className="accordion-body">
                      You can also search on Google with specific keywords such as <code>templatemo business templates, templatemo gallery templates, admin dashboard templatemo, 3-column templatemo, etc.</code>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="section-heading">
                <h6>About Us</h6>
                <h2>What make us the best academy online?</h2>
                <p>
                  What makes us the best academy online is our commitment to
                  providing high-quality education through experienced
                  instructors, interactive learning platforms, and personalized
                  support. We offer a diverse range of courses, ensuring
                  flexibility, accessibility, and real-world skills that empower
                  students to succeed.
                </p>
                <div className="main-button">
                  <a href="#">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Latest Courses</h6>
                <h2>Latest Courses</h2>
              </div>
            </div>
          </div>
          <ul className="event_filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".design">
                Webdesign
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".development">
                Development
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".wordpress">
                Wordpress
              </a>
            </li>
          </ul>
          <div className="row event_box">
            {courses.slice(0, 6).map((course) => (
              <div
                key={course.id}
                className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design"
              >
                <Link href={`/courses/${course.id}`}>
                  <div className="events_item">
                    <div className="thumb">
                      <div className="col-lg-4 col-md-4">
                        <a href="#">
                          <Image
                            src={`${course.image}`}
                            alt=""
                            height={140}
                            width={60}
                          />
                        </a>
                      </div>

                      {/* <span className="category">{course.category.title}</span> */}
                      <span className="price">
                        <h6>
                          <em>$</em>
                          {course.price}
                        </h6>
                      </span>
                    </div>
                    <div className="down-content">
                      <span className="author">{course.instructor?.name}</span>
                      <h4>{course.title}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      {/* <h2 className="timer count-title count-number" data-to="150" data-speed="1000"></h2> */}
                      <h2> 2000</h2>
                      <p className="count-text ">Happy Students</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      {/* <h2 className="timer count-title count-number" data-to="804" data-speed="1000"></h2> */}
                      <h2>300</h2>
                      <p className="count-text ">Course Hours</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      {/* <h2 className="timer count-title count-number" data-to="50" data-speed="1000"></h2> */}
                      <h2>1200</h2>
                      <p className="count-text ">Employed Students</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter end">
                      {/* <h2 className="timer count-title count-number" data-to="15" data-speed="1000"></h2> */}
                      <h2> 22</h2>
                      <p className="count-text ">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team section" id="team">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {users.slice(0, 4).map((user, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-member">
                  <div className="main-content">
                    <Image src={user.image} alt="" />
                    <span className="category">
                      {user.courses[0]?.category.title
                        ? `${user.courses[0].category.title} Instructor`
                        : "General Instructor"}
                    </span>
                    <h4>{user?.name}</h4>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="owl-carousel owl-testimonials">
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="section-heading">
                <h6>TESTIMONIALS</h6>
                <h2>What they say about us?</h2>
                <p>{`"Working with this company has been an exceptional experience. Their expertise, attention to detail, and innovative solutions exceeded our expectations. The team is highly professional and consistently delivered on time. They've played a key role in enhancing our business operations."-Hasan Mahmud`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section events" id="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Schedule</h6>
                <h2>Upcoming Events</h2>
              </div>
            </div>

            {events.slice(0, 4).map((event, index) => (
              <div key={index} className="col-lg-12 col-md-6">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="image">
                        <Image
                          src={event.imageUrl}
                          className="img-fluid"
                          hright="135"
                          width="256"
                          alt="image of an event"
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <ul>
                        <li>
                          <span className="title">{event.title}</span>
                          <h4>{event.description}</h4>
                        </li>
                        <li>
                          <span>Date:</span>
                          <h6>
                            {event.heldAt
                              ? // format datetime to date only
                              Date(event.heldAt)
                                .split(":")[0]
                                .split(" ")
                                .slice(0, 4)
                                .join(" ")
                              : "16 July 2024"}
                          </h6>
                        </li>
                        <li>
                          <span>Duration:</span>
                          <h6>{event.duration}</h6>
                        </li>
                        <li>
                          <span>Price:</span>
                          <h6>{event.price}</h6>
                        </li>
                      </ul>
                      <a href="#">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="contact-us section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  align-self-center">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h2>Feel free to contact </h2>
                <p>
                  {
                    "Thank you for visiting our website! We're excited to assist you with our services and look forward to connecting soon."
                  }
                </p>
                <div className="special-offer">
                  <span className="offer">
                    off
                    <br />
                    <em>20%</em>
                  </span>
                  <h6>
                    Valid: <em>24 August 2024</em>
                  </h6>
                  <h4>
                    Special Offer <em>20</em> OFF!
                  </h4>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-content">
                <form id="contact-form" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autoComplete="on"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your E-mail..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="orange-button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2024 IT Bangla LTD. Organization. All rights reserved.
              &nbsp;&nbsp;&nbsp;{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
