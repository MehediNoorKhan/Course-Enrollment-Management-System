import Link from 'next/link';
import React from 'react';
import { Image } from 'react-bootstrap';

export default function ServicesGridView({ services }) {
    return (
        <div className="row event_box">
            {services && services.map((service) => (
                <div key={service.id} className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
                    <Link href={`/services/${service.id}`} >
                        <div className="events_item" >
                            <div className="thumb">
                                <div style={{ height: 250 }}>
                                    <a href="#">
                                        <Image src={`${service.thumbnail}`} style={{ objectFit: 'cover' }} height={250} alt="" />
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
    );
}
