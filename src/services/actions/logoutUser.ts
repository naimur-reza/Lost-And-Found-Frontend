import { authKey } from "@/constants/authKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeAccessToken } from "./removeAccessToken";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  removeAccessToken();
  router.push("/");
  router.refresh();
};
