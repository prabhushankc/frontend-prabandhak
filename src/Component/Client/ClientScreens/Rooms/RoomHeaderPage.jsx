import React from "react";
import { CardMedia, Typography } from "@material-ui/core";
import useStyle from "./RoomHeaderPageStyle";
import RoomImage from "../../../images/img1.jpg";
const RoomHeaderPage = ({ roomData }) => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.design}>
        <CardMedia
          className={classes.media}
          style={{
            backgroundImage: `url(${RoomImage})`,
          }}
          title="prabandak"
        />
        <Typography className={classes.title} variant="h5" component="h2">
          Prabandak Hotel
        </Typography>
        <Typography className={classes.detail} variant="h5" component="h2">
          Home - Room
        </Typography>
      </div>
      <div
        style={{
          padding: "20px 20px",
          color: "#595775",
          fontSize: "20px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Showing 1-{roomData.length} of {roomData.length} results
      </div>
    </>
  );
};

export default RoomHeaderPage;
