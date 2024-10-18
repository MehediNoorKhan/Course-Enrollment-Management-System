
"use client";
import { PrismaClient } from '@prisma/client';
import { GetCourses } from "@/app/_lib/actions/CoursesUsecase";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";


export default function CoursesList() {
  const [courses, setCourses] = React.useState([]);

  useEffect(() => {

    const getData = async () => {
      const res = await GetCourses();
      setCourses(res);
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




            {courses.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
                <Link href={`/courses/${course.id}`} >
                  <div className="events_item">
                    <div className="thumb">
                      {/* image with fitbox cover */}
                      <Image
                        width={336}
                        height={254}
                        style={{ objectFit: "cover" }}
                        src={course.image}
                        alt="" />
                      {/* <span className="category">{course.category.title}</span> */}
                      <span className="price">
                        <h6>
                          <em>$</em>{course.price}
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
    </>
  );
}
