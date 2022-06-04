import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Auth from "./Component/Admin/Auth/Auth";
import UserDetail from "./Component/Client/UserDetail/userProfile";
import HomePageForm from "./Component/Admin/Admin.js";
import AdminRoomScreen from "./Component/Admin/AdminScreens/Rooms/AdminRoomScreen";
import AdminRoomEdit from "./Component/Admin/AdminScreens/Rooms/AdminRoomEdit";
import "./bootstrap.min.css";

import FoodPage from "./Component/Admin/foodPageAdmin/foodAdmin";
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
            <Route path="/food" element={<FoodPage />} />
            <Route path="/" exact element={<Navigate to="/home" />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/profile" element={<UserDetail />} />
            <Route path="/room" element={<AdminRoomScreen />} />
            {/* <Route path="/room/edit/:id" element={<AdminRoomEdit />} /> */}
          </Routes>
        </Container>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
