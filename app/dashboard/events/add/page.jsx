"use client";

import { createEvent } from "@/app/_lib/actions/eventsUsecase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function DashboardEventAdd({ params }) {
    const [item, setItem] = useState({});
    const { id } = params;

    const router = useRouter();

    useEffect(() => {
        // const foo = async () => {
        //     const res = await GetSingleService(id);
        //     setItem(res);
        // };
        // foo();
    }, []);

    const onHandleChange = async () => {
        const res = await createEvent(item);
        console.log(res);
        if (!res.error) {
            window.location.reload();
            router.back();
        }
    };

    return (
        <main>
            <div className="container-fluid card mx-2">
                <div className="">
                    <div className="card-header row ">
                        <h6 className="card-title  text-m col-6">{"Event's details"}</h6>
                        <p className="text-secondary text-xs col-6 text-end pe-4 pt-1">
                            {item.createdAt
                                ? // format datetime to date only
                                Date(item.createdAt)
                                    .split(":")[0]
                                    .split(" ")
                                    .slice(0, 4)
                                    .join(" ")
                                : "16 July 2024"}
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
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, title: e.target.value })}
                                            id="title"
                                            value={item.title}

                                        />

                                    </div>
                                    {/* dropdown for status */}


                                    <div className="form-group col-12 col-md-6 col-lg-6">
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
                                        <label htmlFor="location">Location</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, location: e.target.value })}
                                            id="location"
                                            value={item.location}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="duration">Duration</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, duration: parseFloat(e.target.value) })}
                                            id="duration"
                                            value={item.duration}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="price">Price</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, price: parseFloat(e.target.value) })}
                                            id="price"
                                            value={item.price}

                                        />
                                    </div>


                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="heldAt">Held At</label>
                                        <input
                                            type="date"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, heldAt: new Date(formData.get('heldAt')).toISOString() })}
                                            id="heldAt"
                                            value={item.heldAt}

                                        />

                                    </div>



                                </div>

                                <div className="col-12 pt-4" >
                                    <label htmlFor="imageUrl">ImageUrl</label>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, imageUrl: e.target.value })}
                                            id="imageUrl"
                                            value={item.imageUrl}

                                        />
                                    </div>
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fluid
                                        className="mb-3 rounded-4 mt-3"
                                        style={{ width: 250 }}
                                    />
                                </div>


                                {/* for images grid view */}
                                {/* <div className="col-12">
                                    <label htmlFor="images">Images</label>
                                    <div className="row">
                                        {item.images && item.images.map((image, index) => (
                                            <div key={index} className="col-4" style={{ width: 220 }}>
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={item.title}
                                                    fluid
                                                    className="mb-3 rounded-4"
                                                />
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div> */}

                                {/* submit button */}
                                <div className="form-group col-12">
                                    <button
                                        type="button"
                                        className="btn btn-primary shadow-none "
                                        onClick={onHandleChange}
                                    >
                                        Publish
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
