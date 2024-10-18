"use client";
// import React from 'react';
// import { Image } from 'react-bootstrap';
import { getEvents } from "../../_lib/actions/eventsUsecase";
import React, { useEffect } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

export default function Event() {
    const [events, setEvents] = React.useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await getEvents();
            setEvents(res);
            console.log(res);
        };

        getData();
    }, []);

    return (
        <>
            <div className="section events" id="events">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Schedule</h6>
                                <h2>Upcoming Events</h2>
                            </div>
                        </div>

                        {events.map((event, index) =>
                        (

                            <div key={index} className="col-lg-12 col-md-6">
                                <div className="item">
                                    <div className="row">

                                        <div className="col-lg-3">
                                            <div className="image">
                                                <Image src={event.imageUrl} className="img-fluid" hright="135" width="256" alt="image of an event" />
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
                                                    <h6>{event.heldAt ?
                                                        // format datetime to date only
                                                        Date(event.heldAt).split(':')[0].split(' ').slice(0, 4).join(' ')
                                                        : '16 July 2024'}</h6>
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


                        )
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}
