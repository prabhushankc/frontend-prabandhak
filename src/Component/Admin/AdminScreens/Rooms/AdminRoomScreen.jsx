import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import AdminHeader from "./AdminHeader";
import RoomDetail from "./RoomDetail";
import { createRoom, listRooms } from "../../../redux/actions/room";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { TextField, Typography } from "@material-ui/core";
import ClientRoomScreen from "../../../Client/ClientScreens/ClientRoomScreen";

const AdminRoomScreen = () => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    standard: "",
    price: 0,
    capacity: 0,
    condition: "",
    noofbeds: 0,
  });
  const [progress, setProgress] = useState(0);
  const [imageData, setImageData] = useState({
    image: "",
  });
  const [imageUrl, setimageUrl] = useState();

  const { title, details, standard, price, capacity, condition, noofbeds } =
    formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const upload = () => {
    if (!imageData.image) return;
    const sotrageRef = ref(storage, `files/${imageData.image.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, imageData.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused": // or 'paused'
            setProgress("Upload is paused");
            break;
          case "running": // or 'running'
            setProgress("Upload is " + progress + "% done");
            break;
        }
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimageUrl(downloadURL);
        });
      }
    );
  };
  const roomCreate = useSelector((state) => state.roomCreate);
  const { success: successCreate } = roomCreate;

  const roomList = useSelector((state) => state.roomList);
  const { success, rooms } = roomList;

  useEffect(() => {
    if (successCreate) {
      navigate("/room");
    }
    dispatch(listRooms());
  }, [dispatch, navigate, successCreate]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createRoom({ ...formData, image: imageUrl }));
  };

  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user?.result.role) {
    return <ClientRoomScreen />;
  }

  return (
    <>
      <AdminHeader />
      <FormContainer>
        <h1 className="py-3">Room Details</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="title" className="py-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="name"
              name="title"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => onChange(e)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="detail" className="py-2">
            <Form.Label>Details</Form.Label>
            <Form.Control
              type="text"
              name="details"
              placeholder="Enter Details"
              value={details}
              onChange={(e) => onChange(e)}
            ></Form.Control>
          </Form.Group>
          {progress ? (
            <Typography variant="body1">{progress}</Typography>
          ) : (
            <div style={{ textAlign: "center" }}>
              <TextField
                type="file"
                name="image"
                onChange={(e) =>
                  setImageData({ ...imageData, image: e.target.files[0] })
                }
              />
              <Button variant="contained" size="small" onClick={upload}>
                Upload
              </Button>
            </div>
          )}
          <Form.Group controlId="standard" className="py-2">
            <Form.Label>Standard</Form.Label>
            <Form.Control
              type="text"
              name="standard"
              placeholder="Enter standard"
              value={standard}
              onChange={(e) => onChange(e)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="price" className="py-2">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter price"
              value={price}
              onChange={(e) => onChange(e)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="capacity" className="py-2">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              type="number"
              name="capacity"
              placeholder="Enter capacity"
              value={capacity}
              onChange={(e) => onChange(e)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="condition" className="py-2">
            <Form.Label>Condition</Form.Label>
            <Form.Control
              type="text"
              name="condition"
              placeholder="Enter condition"
              value={condition}
              onChange={(e) => onChange(e)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="noofbeds" className="py-2">
            <Form.Label>No of Beds</Form.Label>
            <Form.Control
              type="number"
              name="noofbeds"
              placeholder="Enter no of beds"
              value={noofbeds}
              onChange={(e) => onChange(e)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-2">
            Submit
          </Button>
        </Form>
      </FormContainer>
      <div className="room-grid py-3 ">
        <h1>Available Rooms</h1>
        {success && rooms.length > 0 ? (
          rooms.map((room) => <RoomDetail rooms={room} key={room._id} />)
        ) : (
          <h1>No Rooms Yet</h1>
        )}
      </div>
    </>
  );
};

export default AdminRoomScreen;
