import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { CardMedia } from "@material-ui/core";

const RoomDetail = ({ rooms }) => {
  return (
    <>
      <div className="room-details my-4">
        <CardMedia
          style={{
            backgroundImage: `url(${rooms.image})`,
            width: "50%",
          }}
          alt="room-image"
        />
        <div className="room-details-full">
          <h1 className="room-title">{rooms.title}</h1>
          <p>{rooms.details}</p>
          <p className="room-title-beds">
            Available {rooms.noofbeds}bed {rooms.capacity}person
          </p>
          <p className="room-title-category">
            {rooms.standard} Rs.{rooms.price}/ per night
          </p>
        </div>
        <div className="room-details-change">
          <Button variant="primary" className="py-2 m-2">
            Edit
          </Button>
          <Button variant="primary" className="py-2 m-2">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

RoomDetail.propTypes = {
  rooms: PropTypes.object.isRequired,
};

export default RoomDetail;
