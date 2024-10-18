"use client";

import React, { useEffect } from "react";
import "@/app/globals.css";
import './style.css';
import { Image } from "react-bootstrap";
import { GetSingleService } from "@/app/_lib/actions/ServicesUsecase";


export default function ServiceDetail({ params }) {
  const { id } = params;
  const [service, setService] = React.useState([]);


  useEffect(() => {

    const getData = async () => {
      const res = await GetSingleService(parseInt(id));
      setService(res);
      console.log(service);
    };

    getData();

  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2>{service.title}</h2>
        <br />
        <div className="row">
          <div className="col-lg-9">
            <p>
              {service.details}
            </p>
          </div>
        </div>

        {/* auto sized images arrat grid view depending on array length */}
        <br /><br />
        <div className="row justify-content-center">
          {service.images &&
            service.images.map((image, index) => (
              <div key={index} className="col-lg-3">
                <Image
                  className="rounded-2"
                  style={{ objectFit: "cover" }}
                  src={image.imageUrl}
                  alt=""
                />
              </div>
            ))}

        </div>
      </div>



      <div className="section events" id="events">
        <div className="container">
          <div className="row">
           
            <div className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="image">
                      <Image
                        
                        style={{ objectFit: "cover" }}
                        src={service.thumbnail}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <ul>
                      <li>
                        <span className="category"> {service.category ? service.category.title : ''}</span>
                        <h4> {service.title}</h4>
                      </li>
                    
                      <li>
                        <span>Contact:</span>
                        <h6> {service.contact} </h6>
                      </li>
                    </ul>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
