"use server";
import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";
import setAccessToken from "./setAccessToken";

export const registerUser = async (data: any) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("An error occurred", error);
  }
};

export const loginUser = async (data: any) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include", // Include credentials to handle cookies
    });
    const userData = await response.json();

    if (userData?.data?.token) {
      setAccessToken(userData.data.token);
    }

    return userData;
  } catch (error) {
    console.error("An error occurred", error);
  }
};
