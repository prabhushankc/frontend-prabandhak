import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import {
  deleteContactUs,
  listContactUs,
} from "../../../redux/actions/contactUs";

const ContactUsListScreen = () => {
  const dispatch = useDispatch();

  const contactUsDelete = useSelector(state => state.contactUsDelete);
  const { success: successDelete } = contactUsDelete;

  useEffect(() => {
    dispatch(listContactUs());
  }, [dispatch, successDelete]);

  const contactUsDetail = useSelector(state => state.contactUsList);
  const { contactUsList } = contactUsDetail;
  // // useEffect(() => {
  // if (!user?.result?.role) {
  //   return <ContactUs />;
  // }
  // // }, [user.result.role]);

  return (
    <div style={{ minHeight: "80vh" }}>
      <Container>
        <div className="text-center" style={{ marginTop: "6rem" }}>
          <h1
            style={{
              paddingTop: "2rem",
            }}
          >
            Contact List
          </h1>
          <small>
            <i
              class="fa-solid fa-star"
              style={{ fontSize: "1.5rem", color: "skyblue" }}
            ></i>
          </small>{" "}
          stands for admin
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-black">FirstName</th>
              <th className="text-black">LastName</th>
              <th className="text-black">Email</th>
              <th className="text-black">Date</th>
              <th className="text-black">Comment</th>
              <th className="text-black">Status</th>
            </tr>
          </thead>
          {contactUsList.map(item => (
            <tbody>
              <tr>
                {item?.user?.role > 0 ? (
                  <>
                    <td className="text-black">
                      {item.firstName}{" "}
                      <i
                        class="fa-solid fa-star"
                        style={{ fontSize: "1.5rem", color: "skyblue" }}
                      ></i>
                    </td>
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
                  </>
                ) : (
                  <>
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
                    <td className="text-black">
                      <Button
                        variant="danger"
                        onClick={() => dispatch(deleteContactUs(item._id))}
                      >
                        <i
                          className="fas fa-close"
                          style={{ fontSize: "1rem", padding: "0 0.6rem" }}
                        ></i>
                      </Button>
                    </td>
                  </>
                )}
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default ContactUsListScreen;
