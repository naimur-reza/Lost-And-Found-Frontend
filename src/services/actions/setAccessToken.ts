"use server";

import { authKey } from "@/constants/authKey";
import { cookies } from "next/headers";

const setAccessToken = (token: string) => {
  cookies().set(authKey, token);
};

export default setAccessToken;
