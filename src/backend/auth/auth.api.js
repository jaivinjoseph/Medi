import axios from "axios";
import { axiosInstance } from "..";
const AUTH_BASE_URL = "/auth";

//signup
export async function signup(data) {
  return axiosInstance.post(`${AUTH_BASE_URL}/signup`, data);
}

//login
export async function login(data) {
  return axiosInstance.post(`${AUTH_BASE_URL}/login`, data);
}
