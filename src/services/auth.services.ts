import { authKey } from "@/constants/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const storeUserInfo = (token: string) => {
  setToLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  // const token = cookies().get(authKey)?.value;

  const token = getFromLocalStorage(authKey);
  if (token) {
    const decodedData = jwtDecode(token) as any;
    return decodedData;
  }
};

export const isLoggedIn = () => {
  const token = getFromLocalStorage(authKey);
  return token ? true : false;
};

export const getToken = () => {
  const token = cookies().get(authKey)?.value;
  return token;
};
