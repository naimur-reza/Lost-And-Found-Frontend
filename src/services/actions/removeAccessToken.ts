"use server";

import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";

export const removeAccessToken = () => {
  return cookies().delete(authKey);
};
