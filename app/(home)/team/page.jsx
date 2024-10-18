"use client";

// import React from 'react';
import { Image } from 'react-bootstrap';
import { getInstructor } from '../../_lib/actions/UserUsecase';
import React, { useEffect } from "react";
import Link from "next/link";

export default function Team() {

    const [users, setUsers] = React.useState([]);

    useEffect(() => {




        const getData = async () => {
            const res = await getInstructor();
            setUsers(res);
            console.log(res);
        };

        getData();

    }, []);




    return (
        <>
            <div className="team section" id="team">
                <div className="container">
                    <div className="row">

                        {users.map((user, index) =>
                        (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="team-member">
                                    <div className="main-content">
                                        <Image src={user.image} alt="" />
                                        <span className="category">{user.courses[0]?.category.title ? `${user.courses[0].category.title} Instructor` : "General Instructor"}</span>
                                        <h4>{user.name}</h4>
                                        <ul className="social-icons">
                                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
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
