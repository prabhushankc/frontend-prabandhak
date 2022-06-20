import React, { useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import Header from "../../../Header/Header";
import Image1 from "../../../images/roomSecond.jpg";
import { myBookedRoomList } from "../../../redux/actions/roomBook";
import Moment from "react-moment";
import moment from "moment";
import { LinkContainer } from "react-router-bootstrap";

const BookingListClient = () => {
  const dispatch = useDispatch();

  const myRooms = useSelector(state => state.roomMyBookList);
  const { roomBookingItems } = myRooms;

  useEffect(() => {
    dispatch(myBookedRoomList());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <h1
          className="mt-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Booking History
        </h1>

        {roomBookingItems.map(roomItem => (
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
                  Approved
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
              <p>
                Review:
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  <i
                    className="fa fa-star"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <i
                    className="fa fa-star"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <i
                    className="fa fa-star"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <i
                    className="fa fa-star"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <i
                    className="fa fa-star-half-alt"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  ></i>
                </span>
              </p>
            </div>
            {/* <div
              className="booking-history-details"
              style={{
                marginLeft: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  height: "3rem",
                  background: "#595775",
                  color: "white",
                }}
                onClick={() => {
                  <Navigate to={`/${roomItem.room._id}`} />;
                }}
              >
                Details
              </Button>
            </div> */}
            <LinkContainer
              to={`/${roomItem.room._id}/details/room`}
              style={{
                height: "3rem",
                background: "#523c8d",
                marginLeft: "2rem",
              }}
            >
              <Button>Details</Button>
            </LinkContainer>
          </div>
        ))}
      </Container>
    </>
  );
};

export default BookingListClient;
