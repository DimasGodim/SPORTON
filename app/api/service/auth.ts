import { FetchApi } from "../api";
import {LoginCredentials, LoginResponse} from '@/app/api/index'
export const Login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const res = await FetchApi<LoginResponse>("/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (res.token) {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
  }

  return res;
};

export const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};