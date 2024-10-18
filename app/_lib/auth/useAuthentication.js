"use server";

import { signIn, signOut, auth } from "../../auth";
// import { signIn, signOut, auth } from 'next-auth/react';  // Import from next-auth/react

import { findUserBasic } from "../actions/UserUsecase";

export const authenticate = async (formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    const userFind = await findUserBasic(email, password);

    if (!userFind || userFind.error) {

      return "Wrong Credentials";
    }

    const result = await signIn("credentials", {
      redirect: false,  // Disable automatic redirect for better control
      email,
      password,
    });
    if (!result || result.error) {
      return "Wrong Credentials";
    }
    return "Success";  // Proceed further, handle client-side redirects if needed

  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};

export const logOut = async () => {
  await signOut();
};

export const getCookies = async () => {
  const session = await auth();
  return session;
};
