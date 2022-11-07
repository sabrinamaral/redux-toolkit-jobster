import axios from "axios";
import { clearEntireStore } from "../features/user/userSlice";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearEntireStore());
    return thunkAPI.rejectWithValue("Unauthorized! Loggin out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
