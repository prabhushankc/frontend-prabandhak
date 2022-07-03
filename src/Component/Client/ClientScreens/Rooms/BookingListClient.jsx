import React, { useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import Image1 from "../../../images/roomSecond.jpg";
import {
  deleteBookedRoom,
  myBookedRoomList,
} from "../../../redux/actions/roomBook";
import Moment from "react-moment";
import moment from "moment";
import { LinkContainer } from "react-router-bootstrap";
import Khalti from "./khalti/khalti";
import Rating from "../../../Extra/Rating";

const BookingListClient = () => {
  const dispatch = useDispatch();

  const myRooms = useSelector(state => state.roomMyBookList);
  const { roomBookingItems, loading } = myRooms;

  const roomBookDelete = useSelector(state => state.roomBookDelete);
  const { success: successDelete } = roomBookDelete;

  useEffect(() => {
    dispatch(myBookedRoomList());
  }, [dispatch, successDelete]);

  return (
    !loading && (
      <Container>
        <div style={{ marginTop: "6rem", height: "100vh" }}>
          <h1
            className="mt-3"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            Booking History
          </h1>
          {roomBookingItems.length > 0 ? (
            roomBookingItems.map(roomItem => (
              <div key={roomItem._id}>
                <div
                  className="booking-history-full m-4"
                  style={{
                    display: "flex",
                    color: "black",
                    background: "#e6e1e1",
                    padding: "1.5rem",
                    width: "66rem",
                  }}
                >
                  <Image
                    src={roomItem.room.image}
                    style={{ height: "11rem", width: "auto" }}
                  />
                  <div
                    className="booking-history-left"
                    style={{ marginLeft: "2rem" }}
                  >
                    <p>
                      Room Type:
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        {roomItem.room.standard}
                      </span>
                    </p>
                    <p>
                      Name:
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        {roomItem.name}
                      </span>
                    </p>
                    <p>
                      Check-in Date:
                      <span>
                        <Moment
                          format="MM-DD-YYYY"
                          style={{
                            fontWeight: 500,
                            fontSize: "1.1rem",
                            marginLeft: "0.5rem",
                          }}
                        >
                          {roomItem.bookingDate}
                        </Moment>
                      </span>
                    </p>
                    <p>
                      Total:
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        Rs. {roomItem.room.price}
                      </span>
                    </p>
                  </div>
                  <div
                    className="booking-history-right"
                    style={{ marginLeft: "1rem" }}
                  >
                    <p>
                      No. of Guest:
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        {roomItem.noofguests}
                      </span>
                    </p>
                    <p>
                      Status:
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        {roomItem.isApproved ? "Approved" : "Pending"}
                      </span>
                    </p>
                    <p>
                      Check-out Date:
                      <span>
                        <Moment
                          format="MM-DD-YYYY"
                          className="text-black"
                          style={{
                            fontWeight: 500,
                            fontSize: "1.1rem",
                            marginLeft: "0.5rem",
                          }}
                        >
                          {moment(roomItem.bookingDate).add(
                            roomItem.noofdays,
                            "days"
                          )}
                        </Moment>
                      </span>
                    </p>
                    <p style={{ display: "flex" }}>
                      <span style={{ marginRight: "0.5rem" }}>Review:</span>
                      <Rating
                        value={roomItem.room.rating ? roomItem.room.rating : 0}
                        color="#523c8d"
                      />
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <LinkContainer
                      to={`/room/book/${roomItem._id}/details`}
                      style={{
                        height: "3rem",
                        background: "#523c8d",
                        marginLeft: "2rem",
                        marginBottom: "5px",
                      }}
                    >
                      <Button>Details</Button>
                    </LinkContainer>
                    <Khalti />
                    <Button
                      style={{ width: "80%", marginLeft: "2rem" }}
                      variant="danger"
                      onClick={() => {
                        dispatch(deleteBookedRoom(roomItem._id));
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              No Booking Yet!
            </h2>
          )}
        </div>
      </Container>
    )
  );
};

export default BookingListClient;
