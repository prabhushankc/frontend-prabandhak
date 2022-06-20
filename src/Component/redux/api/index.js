import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use(req => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// fetch auth
export const signIn = formData => API.post(`/user/signin`, formData);

export const signUp = formData => API.post(`/user/signup`, formData);

export const singleUser = id => API.get(`/user/singleuser/${id}`);

export const updateSingleUser = (id, formData) =>
  API.patch(`/user/updatesingleuser/${id}`, formData);

export const deleteUser = id => API.delete(`/user/deleteuser/${id}`);

// fetch homePage
export const getHomePage = () => API.get(`/homepage`);
export const createHomePage = formData => API.post(`/homepage`, formData);

// fetch roomPage
// export const getRoomPage = (keyword = "") =>
//   API.get(`/api/rooms?keyword=${keyword}`);
export const createRoom = formData => API.post("/api/rooms", formData);
export const updateSingleRoom = (id, formData) =>
  API.put(`/api/rooms/${id}`, formData);
export const singleRoomDetails = id => API.get(`/api/rooms/${id}`);
export const bookRoom = (formData, id) =>
  API.post(`/api/booked/rooms/${id}`, formData);
export const allBookedRooms = () => API.get("/api/booked/rooms");
export const myBookedRooms = () => API.get("/api/booked/rooms/me");

// Contact Us Page
export const contactUs = formData => API.post("/api/contact/us", formData);
export const listContactUs = () => API.get("/api/contact/us");
