import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminRoomScreen from "../../../Admin/AdminScreens/Rooms/AdminRoomScreen";
import ClientRoomView from "./ClientRoom";
import { listRooms } from "../../../redux/actions/room";

const ClientRoomScreen = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(listRooms());
    };
  }, [dispatch]);

  if (user?.result?.role) {
    return <AdminRoomScreen />;
  }

  return <ClientRoomView />;
};

export default ClientRoomScreen;
