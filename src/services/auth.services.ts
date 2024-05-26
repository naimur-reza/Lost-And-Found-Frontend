import { authKey } from "@/constants/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { jwtDecode } from "jwt-decode";

export const storeUserInfo = (token: string) => {
  setToLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  const token = getFromLocalStorage(authKey);
  if (token) {
    const decodedData = jwtDecode(token);
    return decodedData;
  }
};

export const isLoggedIn = () => {
  const token = getFromLocalStorage(authKey);
  return token ? true : false;
};
