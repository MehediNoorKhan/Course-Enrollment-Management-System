"use server";

import db from '@/app/lib/db.js';

export const GetUsers = async () => {
  try {

    const users = await db.Users.findMany();
    return users;

  } catch (error) {
    console.error("GetUsers", error);
    return [];
  }
}
