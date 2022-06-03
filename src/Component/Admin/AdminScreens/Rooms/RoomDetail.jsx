import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CardMedia } from "@material-ui/core";
import { deleteRoom, listRooms } from "../../../redux/actions/room";

const RoomDetail = ({ roomData }) => {
  const dispatch = useDispatch();

  // const deleteHandler = (id) => {
  //   if (window.confirm("Are you sure you want to delete room?")) {
  //     dispatch(deleteRoom(id));
  //   }
  // };

  return (
    <>
      <div className="room-details my-4">
        <CardMedia
          style={{
            backgroundImage: `url(${roomData.image})`,
            width: "50%",
          }}
          alt="room-image"
        />
        <div className="room-details-full">
          <h1 className="room-title">{roomData.title}</h1>
          <p>{roomData.details}</p>
          <p className="room-title-beds">
            Available {roomData.noofbeds}bed {roomData.capacity}person
          </p>
          <p className="room-title-category">
            {roomData.standard} Rs.{roomData.price}/ per night
          </p>
        </div>
        <div className="room-details-change">
          <Button variant="primary" className="py-2 m-2">
            Edit
          </Button>
          <Button
            variant="primary"
            className="py-2 m-2"
            onClick={() => dispatch(deleteRoom(roomData._id))}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

RoomDetail.propTypes = {
  roomData: PropTypes.object.isRequired,
};

export default RoomDetail;
