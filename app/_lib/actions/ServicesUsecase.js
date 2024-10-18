"use server";

// CRUD for Services

import db from '@/app/_lib/db.js';
import { title } from 'faker/lib/locales/az';

export const GetServices = async () => {
  try {

    const courses = await db.Services.findMany(
      {
        include: {
          images: true,
        }
      }
    );
    return courses;

  } catch (error) {
    console.error("GetServices", error);
    return [];
  }
}

export const GetSingleService = async (id) => {
  try {

    const courses = await db.Services.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        images: true,
      }
    });
    return courses;

  } catch (error) {
    console.error("GetServices", error);
    return [];
  }
}

export const CreateService = async (data) => {
  try {

    const course = await db.Services.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status == "0" ? false : true,
        details: data.details,
        relatedServices: data.relatedServices,
        contact: data.contact,
        thumbnail: data.thumbnail,

      }
    });
    return course;

  } catch (error) {
    console.error("CreateService", error);
    return [];
  }
}


export const UpdateService = async (id, data) => {
  try {

    const course = await db.Services.update({
      where: {
        id: id
      },
      data: {
        title: data.title,
        description: data.description,
        status: data.status == "0" ? false : true,
        details: data.details,
        relatedServices: data.relatedServices,
        contact: data.contact,
        thumbnail: data.thumbnail,

      }
    });
    return course;

  } catch (error) {
    console.error("UpdateService", error);
    return [];
  }
}


export const deleteService = async (id) => {
  try {

    const course = await db.Services.delete({
      where: {
        id: id
      }
    });
    return course;

  } catch (error) {
    console.error("DeleteService", error);
    return [];
  }
}