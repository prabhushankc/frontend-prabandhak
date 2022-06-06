import React, { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../Header/Header";
import { bookRoomList } from "../../../redux/actions/roomBook";
import Moment from "react-moment";
import moment from "moment";

const RoomBookedList = () => {
  const dispatch = useDispatch();

  const roomBookList = useSelector(state => state.roomBookList);
  const { roomBookingItems } = roomBookList;

  useEffect(() => {
    dispatch(bookRoomList());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Container>
        <div className="booked-room-list text-center py-3">
          <h1>Booked Room List</h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-black">Name</th>
              <th className="text-black">Booked Room Id</th>
              <th className="text-black">No of Guests</th>
              <th className="text-black">No of Rooms</th>
              <th className="text-black">Check-In Date</th>
              <th className="text-black">Check-Out Date</th>
              <th className="text-black">Status</th>
            </tr>
          </thead>
          {roomBookingItems.map(item => (
            <tbody>
              <tr>
                <td className="text-black">{item.name}</td>
                <td className="text-black">{item._id}</td>
                <td className="text-black">{item.noofguests}</td>
                <td className="text-black">{item.noofdays}</td>
                <td>
                  <Moment format="YYYY/MM/DD" className="text-black">
                    {item.bookingDate}
                  </Moment>
                </td>
                <td>
                  <Moment format="YYYY/MM/DD" className="text-black">
                    {moment(item.bookingDate).add(item.noofdays, "days")}
                  </Moment>
                </td>
                <td className="text-black">Not Approved</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default RoomBookedList;
