import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

// fetch auth
export const signIn = (formData) => API.post(`/user/signin`, formData);

export const signUp = (formData) => API.post(`/user/signup`, formData);

export const singleUser = (id) => API.get(`/user/singleuser/${id}`);

export const updateSingleUser = (id, formData) =>
  API.patch(`/user/updatesingleuser/${id}`, formData);

export const deleteUser = (id) => API.delete(`/user/deleteuser/${id}`);

// fetch homePage
export const getHomePage = () => API.get(`/homepage`);
export const createHomePage = (formData) => API.post(`/homepage`, formData);
export const deleteHome = (id) => API.delete(`/homepage/deletehome/${id}`);
export const updateHomePage = (id, formData) =>
  API.patch(`/homepage/${id}`, formData);

// fetch foodPage
export const getFoodPage = () => API.get(`/foodpage`);
export const createFoodPage = (formData) => API.post(`/foodpage`, formData);
export const updateFoodPage = (id, formData) =>
  API.patch(`/foodpage/${id}`, formData);

// fetch roomPage
export const getRoomPage = () => API.get(`/api/rooms`);
export const createRoom = (formData) => API.post("/api/rooms", formData);
export const deleteFood = (id) => API.delete(`/foodpage/deletefood/${id}`);
