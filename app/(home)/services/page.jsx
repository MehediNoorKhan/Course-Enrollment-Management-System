
"use client";

import { GetServices } from '@/app/_lib/actions/ServicesUsecase';
import Link from "next/link";
import React, { useEffect } from "react";
import { Image } from 'react-bootstrap';
import ServicesGridView from '../../(components)/ServicesGridView';

export default function ServicesList() {
    const [services, setServices] = React.useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await GetServices();
            setServices(res);
            console.log(res);
        };

        getData();

    }, []);




    return (
        <>
            <section className="mt-5" id="courses">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Our</h6>
                                <h2>Services</h2>
                            </div>
                        </div>
                    </div>
                    

                    <ServicesGridView services={services} />


                </div>
            </section>
        </>
    );
}
