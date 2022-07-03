import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Auth from "./Component/Admin/Auth/Auth";
import Verify from "./Component/Admin/Auth/Verify";
import UserDetail from "./Component/Client/UserDetail/userProfile";
import AddToCart from "./Component/Client/UserDetail/addToCart/addToCart";
import HomePageForm from "./Component/Admin/homePageAdmin/Admin";
import FoodPage from "./Component/Admin/foodPageAdmin/foodAdmin";
import AdminRoomScreen from "./Component/Admin/AdminScreens/Rooms/AdminRoomScreen";
import RoomBook from "./Component/Client/ClientScreens/Rooms/RoomBook";
import RoomBookedList from "./Component/Admin/AdminScreens/Rooms/RoomBookedList";
import RoomBookedDetails from "./Component/Client/ClientScreens/Rooms/RoomBookedDetails";
import RoomDetails from "./Component/Client/ClientScreens/Rooms/RoomDetails";
import "./bootstrap.min.css";
import ContactUs from "./Component/Client/ClientScreens/ContactUs/ContactUs";
import ContactUsListScreen from "./Component/Admin/AdminScreens/ContactUs/ContactList";
import BookingListClient from "./Component/Client/ClientScreens/Rooms/BookingListClient";
import NavBar from "./Component/Extra/navBar/navBar";
import Footer from "./Component/Extra/Footer/footer";
import PageNotFound from "./Component/Extra/pageNotFound";
import UserHistory from "./Component/Client/UserDetail/Paymenthistory/paymentHistory";
import { gapi } from "gapi-script";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  React.useEffect(() => {
    return () => {
      gapi.load("client:auth2", () => {
        gapi.client.getAuthInstance({
          clientId:
            "426614789973-umcv7inmjg49cprhasmtmiu1q1j705s2.apps.googleusercontent.com",
          scope: "profile email",
        });
      });
    };
  }, []);
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
          <NavBar />
          <Routes>
            <Route path="/home" element={<HomePageForm />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/" exact element={<Navigate to="/home" />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/profile" element={<UserDetail />} />
            <Route path="/history" element={<UserHistory />} />
            <Route path="/user/:id/verify/:token" exact element={<Verify />} />
            {!user?.result?.role ? (
              <Route path="/cart" element={<AddToCart />} />
            ) : (
              <Route path="/payment" element={<AddToCart />} />
            )}
            <Route path="/room" element={<AdminRoomScreen />} />
            <Route path="/search/:keyword" element={<AdminRoomScreen />} />
            <Route path="room?sort" element={<AdminRoomScreen />} />
            <Route path={`/:id/book/room`} element={<RoomBook />} />
            <Route path="/list/book/room" element={<RoomBookedList />} />
            <Route
              path="/room/book/:id/details"
              element={<RoomBookedDetails />}
            />
            <Route path="/list/myBooking" element={<BookingListClient />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact" element={<ContactUsListScreen />} />
            <Route path={`/:id/details/room`} element={<RoomDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Container>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
