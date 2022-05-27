import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
import useStyles from "./ClientRoomStyle";
import { useSelector } from "react-redux";
import RoomHeaderPage from "./RoomHeaderPage";

const ClientRoomView = () => {
  const roomList = useSelector(state => state.roomList);
  const { rooms } = roomList;

  const classes = useStyles();

  return (
    <>
      <RoomHeaderPage roomData={rooms} />
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={2}
      >
        {rooms.map(roomData => (
          <Grid key={roomData._id} item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.cards} raised elevation={3}>
              <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
              >
                <CardMedia
                  className={classes.media}
                  style={{ backgroundImage: `url(${roomData.image})` }}
                  title={roomData.title}
                />
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {roomData.title}
                </Typography>
                <CardContent className={classes.cartTitle}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {roomData.details}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{}}
                    >
                      Available:{" "}
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "bold",
                        }}
                      >
                        {roomData.capacity}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{}}
                    >
                      Price:{" "}
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "bold",
                        }}
                      >
                        Rs.{roomData.price}
                      </span>
                    </Typography>
                  </div>
                </CardContent>
                {/* <div className={classes.details}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h2"
                    >
                      {foodData.tags
                        .map(tag => (
                          <Button
                            style={{
                              backgroundColor: "#595775",
                              "&:hover": {
                                backgroundColor: "#595775",
                              },
  
                              borderRadius: "6px",
                              color: "white",
                              padding: "3px 7px",
                              margin: "2px 3px",
                              fontSize: "13px",
                            }}
                          >
                            {tag}
                          </Button>
                        ))
                        .splice(-2)}
                    </Typography>
                  </div> */}
              </ButtonBase>
              <CardActions className={classes.cardActionsI}>
                <Button size="small" className={classes.btn} type="button">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ClientRoomView;
