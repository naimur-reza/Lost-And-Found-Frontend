import { authKey } from "@/constants/authKey";
import { removeAccessToken } from "./removeAccessToken";

export const logoutInstance = () => {
  localStorage.removeItem(authKey);
  removeAccessToken();
};
