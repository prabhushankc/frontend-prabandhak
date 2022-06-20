import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../Header/Header";
import Image1 from "../../../images/roomSecond.jpg";
import { detailRoom } from "../../../redux/actions/room";

const RoomDetails = () => {
  const params = useParams();
  const roomId = params.id;
  const dispatch = useDispatch();

  const roomDetails = useSelector(state => state.roomDetails);
  const { room, loading: loadingDetails } = roomDetails;

  useEffect(() => {
    dispatch(detailRoom(roomId));
  }, [dispatch, roomId]);

  return (
    !loadingDetails && (
      <>
        <Header />
        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Image
                src={room.image}
                style={{ height: "28rem", width: "33.5rem" }}
              />
            </Col>
            <Col md={6}>
              <h3>{room.title}</h3>
              <div
                className="room-details-rating-full my-4"
                style={{ display: "flex" }}
              >
                <div>
                  <div
                    className="room-details-rating"
                    style={{
                      marginRight: "8px",
                      color: "red",
                      display: "flex",
                      background: "#e7e4e4",
                      borderRadius: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
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
                    <p style={{ margin: "0 0.7rem", color: "black" }}>
                      4.5 out of 5
                    </p>
                  </div>
                  <div className="mt-2">
                    <small
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      45 customer ratings
                    </small>
                  </div>
                </div>

                <div
                  className="vl"
                  style={{
                    border: "1px solid black",
                    height: "1.5rem",
                    marginTop: "9px",
                  }}
                ></div>

                <p
                  style={{
                    marginLeft: "1rem",
                    color: "black",
                    marginTop: "7px",
                  }}
                >
                  Available{" "}
                  <i
                    className="fa fa-check"
                    aria-hidden="true"
                    style={{
                      marginLeft: "5px",
                      fontSize: "1.2rem",
                      color: "green",
                    }}
                  ></i>
                </p>
              </div>

              <div className="room-details-full" style={{ display: "flex" }}>
                <div
                  className="room-details-full-left"
                  style={{ maxWidth: "17rem", marginRight: "0.8rem" }}
                >
                  <h5>Suite</h5>
                  <div
                    className="room-details-top-icon mt-3"
                    style={{ display: "flex" }}
                  >
                    <i
                      className="fa fa-bed"
                      style={{
                        marginRight: "1rem",
                        fontSize: "1.5rem",
                        marginTop: "5px",
                      }}
                    ></i>
                    <p style={{ fontSize: "0.75rem" }}>
                      It include {room.noofbeds} Queen sized bed, private
                      kitchen, bathroom and some living spaces.
                    </p>
                  </div>
                  <div
                    className="room-details-middle-icon"
                    style={{ display: "flex" }}
                  >
                    <i
                      className="fas fa-bread-slice"
                      style={{
                        marginRight: "1rem",
                        fontSize: "1.5rem",
                        marginTop: "5px",
                      }}
                    ></i>
                    <p style={{ fontSize: "0.75rem" }}>
                      We offer light breakfast coffee with fresh bread &
                      pancakes.
                    </p>
                  </div>
                  <div
                    className="room-details-bottom-icon"
                    style={{ display: "flex" }}
                  >
                    <i
                      className="far fa-sun"
                      style={{
                        marginRight: "1rem",
                        fontSize: "1.5rem",
                        marginTop: "5px",
                      }}
                    ></i>
                    <p style={{ fontSize: "0.75rem" }}>
                      Best sunlight view in the morning.
                    </p>
                  </div>
                </div>

                <div
                  className="vl"
                  style={{
                    border: "1px solid gray",
                    height: "12rem",
                    marginTop: "9px",
                    marginRight: "1.5rem",
                  }}
                ></div>

                <div className="room-details-full-right">
                  <h5>Room Amenities</h5>
                  <div
                    className="room-details-service mt-3"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="room-details-service-left"
                      style={{ marginRight: "1.5rem" }}
                    >
                      <div
                        className="room-details-service-top"
                        style={{ display: "flex", marginTop: "3px" }}
                      >
                        <i
                          className="fas fa-shower"
                          style={{ marginRight: "0.7rem", marginTop: "3px" }}
                        ></i>
                        <p style={{ fontSize: "0.95rem" }}>Shower</p>
                      </div>
                      <div
                        className="room-details-service-middle"
                        style={{ display: "flex", marginTop: "3px" }}
                      >
                        <i
                          className="fa-solid fa-lock"
                          style={{ marginRight: "0.7rem", marginTop: "3px" }}
                        ></i>
                        <p style={{ fontSize: "0.95rem" }}>Safe</p>
                      </div>
                      <div
                        className="room-details-service-bottom"
                        style={{ display: "flex", marginTop: "3px" }}
                      >
                        <i
                          className="fa-solid fa-suitcase"
                          style={{ marginRight: "0.7rem", marginTop: "3px" }}
                        ></i>
                        <p style={{ fontSize: "0.95rem" }}>Luggage</p>
                      </div>
                    </div>
                    <div
                      className="room-details-service-right"
                      style={{ display: "flex" }}
                    >
                      <i
                        className="fas fa-clock"
                        style={{ marginTop: "4px", marginRight: "1rem" }}
                      ></i>
                      <p style={{ fontSize: "0.95rem" }}>24/7 service</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="room-detail-pricing mt-4"
                style={{ marginLeft: "1.5rem", display: "flex" }}
              >
                <h3 style={{ marginRight: "3rem" }}>
                  Rs. {room.price} / Night
                </h3>
                <LinkContainer
                  to={`/${room._id}/book/room`}
                  style={{ background: "#523c8d", borderRadius: "2rem" }}
                >
                  <Button type="primary">Book Now</Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default RoomDetails;
