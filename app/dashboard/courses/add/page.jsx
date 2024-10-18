"use client";

import { CreateCourse, getCategorys } from "@/app/_lib/actions/CoursesUsecase";
import { getInstructor } from "@/app/_lib/actions/UserUsecase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function DashboardCourse({ params }) {
    const [item, setItem] = useState({});
    const [instructors, setInstructors] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const { id } = params;
    const router = useRouter();

    useEffect(() => {
        const foo = async () => {
            setInstructors(await getInstructor());
            setCategorys(await getCategorys());
        };
        foo();

    }, []);

    const onHandleChange = async () => {
        const res = await CreateCourse(item);

        console.log(res);
        if (!res.error) {
            // window.location.reload();
            router.back();

        }
    };

    return (
        <main>
            <div className="container-fluid card mx-2">
                <div className="">
                    <div className="card-header row ">
                        <h6 className="card-title  text-m col-6">{"Course's details"}</h6>
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
                                        <label htmlFor="status">Status</label>
                                        <select
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, status: e.target.value })}
                                            id="status"
                                            value={item.status == "0" ? "0" : "1"}

                                        >
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                    </div>

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
                                        <label htmlFor="code">Code</label>
                                        <input
                                            type="text"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, code: e.target.value })}
                                            id="details"
                                            rows="3"
                                            value={item.code}

                                        ></input>
                                    </div>


                                    {/* dropdown for instructor */}
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="instructor">Instructor</label>
                                        <select
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, instructorId: parseInt(e.target.value) })}
                                            id="instructorId"
                                            value={item.instructorId}
                                        >
                                            {instructors && instructors.map((instru) => (
                                                <option key={instru.id} value={instru.id} >{instru.name}</option>

                                            ))

                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="category">Category</label>
                                        <select
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, categoryId: parseInt(e.target.value) })}
                                            id="categoryId"
                                            value={item.categoryId}
                                        >
                                            {categorys && categorys.map((catego) => (
                                                <option key={catego.id} value={catego.id} >{catego.title}</option>

                                            ))

                                            }
                                        </select>
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
                                        <label htmlFor="discount">Discount</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, discount: parseFloat(e.target.value) })}
                                            id="discount"
                                            value={item.discount}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="courseDuration">Course Duration</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, courseDuration: parseInt(e.target.value) })}
                                            id="courseDuration"
                                            value={item.courseDuration}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="classDuration">Class Duration</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, classDuration: parseInt(e.target.value) })}
                                            id="classDuration"
                                            value={item.classDuration}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="credit">Credit</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, credit: parseFloat(e.target.value) })}
                                            id="credit"
                                            value={item.credit}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="numberOfClasses">numberOfClasses</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, numberOfClasses: parseInt(e.target.value) })}
                                            id="numberOfClasses"
                                            value={item.numberOfClasses}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="numebrOfClass">numebrOfClass</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, numebrOfClass: parseInt(e.target.value) })}
                                            id="numebrOfClass"
                                            value={item.numebrOfClass}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor="availableSeats">availableSeats</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, availableSeats: parseInt(e.target.value) })}
                                            id="availableSeats"
                                            value={item.availableSeats}

                                        />
                                    </div>
                                    <div className="form-group col-12 col-md-6 col-lg-6">
                                        <label htmlFor=" numberOfTests"> numberOfTests</label>
                                        <input
                                            type="number"
                                            className="form-control bg-gray-200 px-2 border border-gray-400"
                                            onChange={(e) => setItem({ ...item, numberOfTests: parseInt(e.target.value) })}
                                            id=" numberOfTests"
                                            value={item.numberOfTests}

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
                                        Add
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


