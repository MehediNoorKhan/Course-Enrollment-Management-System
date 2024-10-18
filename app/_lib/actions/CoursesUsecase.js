"use server";

// CRUD for Courses

import db from '@/app/_lib/db.js';
import { getInstructor, GetUser } from './UserUsecase';

export const GetCourses = async () => {
  try {

    const courses = await db.Courses.findMany(
      {
        include: {
          category: true,
          instructor: true
        }
      }
    );
    return courses;

  } catch (error) {
    console.error("GetCourses", error);
    return [];
  }
};

export const GetSingleCourse = async (id) => {
  try {

    const courses = await db.Courses.findUnique({
      where: {
        id: id
      },
      include: {
        category: true,
        instructor: true
      }
    });
    return courses;

  } catch (error) {
    console.error("GetCourses", error);
    return [];
  }
};

export const CreateCourse = async (data) => {
  try {

    const category = await getCategory(data.categoryId);
    const instruct = await GetUser(data.instructorId);
    delete category.id;
    delete instruct.id;
    console.log("instructor ID: " + data.instructorId);
    const course = await db.Courses.create({
      data: {
        // instructorId: data.instructorId,
        title: data.title,
        description: data.description,
        price: parseFloat(data.price),
        discount: parseFloat(data.discount),
        code: data.code,
        // categoryId: parseInt(data.categoryId),
        image: data.image,
        credit: parseFloat(data.credit),
        numberOfClasses: parseInt(data.numberOfClasses),
        numebrOfClass: parseInt(data.numebrOfClass),
        availableSeats: parseInt(data.availableSeats),
        numberOfTests: data.numberOfTests,
        testDescription: data.testDescription,
        status: data.status == "0" ? false : true,
        deadline: data.deadline,
        classDuration: data.classDuration,
        courseDuration: parseInt(data.courseDuration),
        // instructor: instruct,
        // category: category,
      }


    });
    return course;

  } catch (error) {
    console.error("CreateCourse", error);
    return { error: error };
  }
};

export const UpdateCourse = async (id, data) => {
  console.log("updatecourse id: " + id);
  try {

    const course = await db.Courses.update({
      where: {
        id: id
      },
      data: {
        instructorId: data.instructorId,
        title: data.title,
        description: data.description,
        price: parseFloat(data.price),
        discount: parseFloat(data.discount),
        code: data.code,
        categoryId: data.categoryId,
        image: data.image,
        credit: parseFloat(data.credit),
        numberOfClasses: parseInt(data.numberOfClasses),
        numebrOfClass: parseInt(data.numebrOfClass),
        availableSeats: parseInt(data.availableSeats),
        numberOfTests: data.numberOfTests,
        testDescription: data.testDescription,
        status: data.status,
        deadline: data.deadline,
        classDuration: data.classDuration,
        courseDuration: parseInt(data.courseDuration),

      }
    });
    return course;

  } catch (error) {
    console.error("UpdateCourse", error);
    return [];
  }
};


export const deleteCourse = async (id) => {
  try {

    const course = await db.Courses.delete({
      where: {
        id: id
      }
    });
    return course;

  } catch (error) {
    console.error("DeleteCourse", error);
    return [];
  }
};

export const getCategory = async (id) => {
  try {
    const category = await db.Category.findUnique({
      where: { id: parseInt(id) },
    });
    return category;
  } catch (error) {
    console.error("GetCategory", error);
    return {};
  }
};

export const getCategorys = async () => {
  try {
    const category = await db.Category.findMany();
    return category;

  } catch (error) {
    console.log("Error: " + error);
    return null;
  }
};
