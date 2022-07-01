import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CardMedia } from "@material-ui/core";
import { deleteRoom } from "../../../redux/actions/room";

const RoomDetail = ({ rooms, setCurrentId }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteRoom(rooms._id));
  };
  return (
    <>
      <div className="room-details my-4">
        <CardMedia
          style={{
            backgroundImage: `url(${rooms.image})`,
            width: "40%",
          }}
          alt="room-image"
        />
        <div className="room-details-full">
          <h1 className="room-title">{rooms.title}</h1>
          <p className="text-black">{rooms.details}</p>
          <p className="room-title-beds text-black">
            Available {rooms.noofbeds}bed {rooms.capacity}person
          </p>
          <p className="room-title-category text-black">
            {rooms.standard} Rs.{rooms.price}/ per night
          </p>
        </div>
        <div className="room-details-change text-black">
          {/* <LinkContainer to={`/room/edit/${rooms._id}`} */}
          <Button
            variant="primary"
            className="py-2 m-2"
            onClick={e => {
              e.stopPropagation();
              setCurrentId(rooms?._id);
            }}
          >
            <i className="fas fa-edit fa-anup"></i>
          </Button>
          {/* </LinkContainer> */}

          <Button
            variant="primary"
            className="py-2 m-2"
            onClick={deleteHandler}
          >
            <i className="fas fa-trash fa-anup"></i>
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
