"use client";

import { getGender, GetUser, UpdateUser } from "@/app/_lib/actions/UserUsecase";
import { Role } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function DashboardUser({ params }) {
    const [item, setItem] = useState({});
    const [genders, setGenders] = useState([])
    const [roles, setRoles] = useState([])
    const { id } = params;

    useEffect(() => {
        const foo = async () => {
            const res = await GetUser(id);
            setItem(res);
            const gen = await getGender();
            setGenders(gen);
            const rol = await Object.values(Role);
            setRoles(rol);
        };
        foo();
    }, []);

    const onHandleChange = async () => {
        const res = await UpdateUser(item.id, item);
        console.log(res);
        if (!res.error) {
            window.location.reload();
        }
    }

    const formateDate = (date) => {
        const dt = new Date(date);
        return dt;
    }

    return (
        <main>
            <div className="container-fluid card mx-2">
                <div className="">
                    <div className="card-header row ">
                        <h6 className="card-title  text-m col-6">{"User's details"}</h6>
                        <p className="text-secondary text-xs col-6 text-end pe-4 pt-1">
                            {item.createdAt
                                ? // format datetime to date only
                                Date(item.createdAt)
                                    .split(":")[0]
                                    .split(" ")
                                    .slice(0, 4)
                                    .join(" ")
                                : "16 Feb 2023"}
                        </p>
                    </div>
                    <div className="card-body pt-0">
                        <div className="row">
                            {/* <div className="col-md-6">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div> */}

                            <form>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, name: e.target.value })}
                                            id="name"
                                            value={item.name}

                                        />

                                    </div>


                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, email: e.target.value })}
                                            id="email"
                                            value={item.email}

                                        />
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="amount">Amount</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, amount: e.target.value })}
                                            id="amount"
                                            value={item.amount}
                                            disabled
                                        />

                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="dob">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, dob: new Date(e.target.value).toISOString() })}
                                            id="dob"
                                            value={String(item.dob).split("T")[0]}

                                        />

                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="token">Token</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, token: e.target.value })}
                                            id="token"
                                            value={item.token}
                                            disabled
                                        />
                                    </div>



                                    {/* dropdown for status */}
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="gender">Gender</label>
                                        <select
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, gender: e.target.value })}
                                            id="gender"
                                            value={item.gender}

                                        >

                                            {genders.map((item, index) =>
                                                (<option value={item} key={index}>{item}</option>)

                                            )
                                            }

                                        </select>
                                    </div>

                                    {/* dropdown for role */}
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="role">Role</label>
                                        <select
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, role: e.target.value })}
                                            id="role"
                                            value={item.role}

                                        >

                                            {roles.map((item, index) =>
                                                (<option value={item} key={index}>{item}</option>)

                                            )
                                            }

                                        </select>
                                    </div>

                                    {/* <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, description: e.target.value })}
                                            id="description"
                                            rows="3"
                                            value={item.description}

                                        ></textarea>
                                    </div>

                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="details">Details</label>
                                        <textarea
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, details: e.target.value })}
                                            id="details"
                                            rows="3"
                                            value={item.details}

                                        ></textarea>
                                    </div> */}




                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="contact">Contact</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, contact: e.target.value })}
                                            id="contact"
                                            value={item.contact}

                                        />
                                    </div>



                                </div>

                                <div className="col-12 pt-4" >
                                    <label htmlFor="image">Image</label>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, image: e.target.value })}
                                            id="image"
                                            value={item.image}

                                        />
                                    </div>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fluid
                                        className="mb-3 rounded-4 mt-3"
                                        style={{ width: 250 }}
                                    />
                                </div>


                                {/* submit button */}
                                <div className="form-group col-12">
                                    <button
                                        type="button"
                                        className="btn btn-primary shadow-none "
                                        onClick={onHandleChange}
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
