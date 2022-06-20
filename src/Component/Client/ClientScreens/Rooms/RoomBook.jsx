import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../../../Admin/AdminScreens/Rooms/FormContainer";
import { bookRoom } from "../../../redux/actions/roomBook";
import Header from "../../../Header/Header";
import Message from "../../../Message/Message";

const RoomBook = () => {
  const params = useParams();
  const roomId = params.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roomBook = useSelector(state => state.roomBook);
  const { success: successBook, error: errorBook } = roomBook;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phnumber: "",
    noofguests: 0,
    bookingDate: "",
    noofdays: 0,
  });

  const { name, email, phnumber, noofguests, bookingDate, noofdays } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(bookRoom(formData, roomId));
  };

  useEffect(() => {
    setTimeout(() => {
      if (successBook) {
        navigate("/room");
      }
    }, 4000);
  }, [dispatch, navigate, roomId, successBook]);

  return (
    <>
      <Header />
      {successBook && <Message variant="primary">Room Booked</Message>}
      {errorBook && <Message variant="danger">{errorBook}</Message>}
      <FormContainer>
        <h1 className="py-3 text-center">Customer Detail</h1>
        <Form
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(2, auto)",
          //   gap: "3rem",
          // }}
          onSubmit={submitHandler}
        >
          <Row>
            <Col md={6} className="my-3">
              <Form.Group controlId="name" className="py-3">
                <Form.Label className="text-black">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={e => onChange(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="phnumber" className="py-3">
                <Form.Label className="text-black">Phone Number</Form.Label>
                <Form.Control
                  type=""
                  name="phnumber"
                  placeholder="Enter number"
                  value={phnumber}
                  onChange={e => onChange(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="bookingDate" className="py-3">
                <Form.Label className="text-black">Booking Date</Form.Label>
                <Form.Control
                  type="date"
                  name="bookingDate"
                  value={bookingDate}
                  onChange={e => onChange(e)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="py-3">
              <Form.Group controlId="email" className="py-3">
                <Form.Label className="text-black">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => onChange(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="guests" className="py-3">
                <Form.Label className="text-black">No. of Guests</Form.Label>
                <Form.Control
                  type="number"
                  name="noofguests"
                  placeholder="Total Guests"
                  value={noofguests}
                  onChange={e => onChange(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="noofdays" className="py-3">
                <Form.Label className="text-black">No of Days</Form.Label>
                <Form.Control
                  type="number"
                  name="noofdays"
                  placeholder="Number of day"
                  value={noofdays}
                  onChange={e => onChange(e)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <div className="btn-booking">
            <Button
              size="small"
              className="btn btn-primary"
              type="submit"
              style={{
                margin: "0 auto",
                display: "block",
              }}
            >
              Book
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};

export default RoomBook;
