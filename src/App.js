import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Auth from "./Component/Admin/Auth/Auth";
import UserDetail from "./Component/Client/UserDetail/userProfile";
import HomePageForm from "./Component/Admin/Admin.js";
import AdminRoomScreen from "./Component/Admin/AdminScreens/Rooms/AdminRoomScreen";
import RoomBook from "./Component/Client/ClientScreens/Rooms/RoomBook";
import RoomBookedList from "./Component/Admin/AdminScreens/Rooms/RoomBookedList";
import "./bootstrap.min.css";
import ContactUs from "./Component/Client/ClientScreens/ContactUs/ContactUs";
import ContactUsListScreen from "./Component/Admin/AdminScreens/ContactUs/ContactList";

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
            <Route path="/" exact element={<Navigate to="/home" />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/profile" element={<UserDetail />} />
            <Route path="/room" element={<AdminRoomScreen />} />
            <Route path={`/:id/book/room`} element={<RoomBook />} />
            <Route path="/list/book/room" element={<RoomBookedList />} />
            <Route path="/contact/us" element={<ContactUs />} />
            <Route path="/list/contact/us" element={<ContactUsListScreen />} />
          </Routes>
        </Container>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
