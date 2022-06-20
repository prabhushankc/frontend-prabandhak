import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Auth from "./Component/Admin/Auth/Auth";
import UserDetail from "./Component/Client/UserDetail/userProfile";
import HomePageForm from "./Component/Admin/Admin.js";
import AdminRoomScreen from "./Component/Admin/AdminScreens/Rooms/AdminRoomScreen";
import RoomBook from "./Component/Client/ClientScreens/Rooms/RoomBook";
import RoomBookedList from "./Component/Admin/AdminScreens/Rooms/RoomBookedList";
import RoomDetails from "./Component/Client/ClientScreens/Rooms/RoomDetails";
import "./bootstrap.min.css";
import ContactUs from "./Component/Client/ClientScreens/ContactUs/ContactUs";
import ContactUsListScreen from "./Component/Admin/AdminScreens/ContactUs/ContactList";
import BookingListClient from "./Component/Client/ClientScreens/Rooms/BookingListClient";

const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Container
          maxWidth="xl"
          style={{
            margin: "0px",
            padding: "0px",
            overflow: "hidden",
          }}
        >
          <Routes>
            <Route path="/home" element={<HomePageForm />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<UserDetail />} />
            <Route path="/room" element={<AdminRoomScreen />} />
            <Route path="/search/:keyword" element={<AdminRoomScreen />} />
            <Route path="room?sort" element={<AdminRoomScreen />} />
            <Route path={`/:id/book/room`} element={<RoomBook />} />
            <Route path="/list/book/room" element={<RoomBookedList />} />
            <Route path="/list/myBooking" element={<BookingListClient />} />
            <Route path="/contact/us" element={<ContactUs />} />
            <Route path="/list/contact/us" element={<ContactUsListScreen />} />
            <Route path={`/:id/details/room`} element={<RoomDetails />} />
          </Routes>
        </Container>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
