import React, { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../Header/Header";
import Moment from "react-moment";
import { listContactUs } from "../../../redux/actions/contactUs";

const ContactUsListScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listContactUs());
  }, [dispatch]);

  const contactUsDetail = useSelector(state => state.contactUsList);
  const { contactUsList } = contactUsDetail;

  return (
    <>
      <Header />
      <Container>
        <div className="text-center py-3">
          <h1>Contact List</h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-black">FirstName</th>
              <th className="text-black">LastName</th>
              <th className="text-black">Email</th>
              <th className="text-black">Date</th>
              <th className="text-black">Comment</th>
            </tr>
          </thead>
          {contactUsList.map(item => (
            <tbody>
              <tr>
                <td className="text-black">{item.firstName}</td>
                <td className="text-black">{item.lastName}</td>
                <td className="text-black">
                  <a
                    href={`mailto:${item.email}`}
                    className="text-decoration-none"
                  >
                    {item.email}
                  </a>
                </td>
                <td>
                  <Moment format="YYYY/MM/DD" className="text-black">
                    {item.date}
                  </Moment>
                </td>
                <td className="text-black">{item.comment}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default ContactUsListScreen;
