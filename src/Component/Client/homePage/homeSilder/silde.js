import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchHomePage } from '../../../redux/actions/homePage';
import useStyles from './style';
import { CircularProgress } from '@mui/material';
import { Typography, Button, Grid, CardMedia, Paper, ButtonBase } from '@material-ui/core';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function Slider() {
  const dispatch = useDispatch();
  const { isLoading, homePageData } = useSelector((state) => state.homePage);
  useEffect(() => {
    dispatch(fetchHomePage());
  }, [dispatch]);
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  // find width of device screen
  const width = window.innerWidth;
  const height = window.innerHeight;
  // find user device
  const [device, setDevice] = React.useState(
    width > height ? 'desktop' : 'mobile'
  );
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        {isLoading ? <Grid container style={{
          padding: '0px',
          margin: '0px',
        }}>
          <div style={{
            backgroundImage: 'url(/prabandhak.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
          }} >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', height: '60vh' }}><CircularProgress style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              height: '50px',
              width: '50px',
              color: 'white',
              zIndex: '999',
            }} /></div></div></Grid> :
          <>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              interval={10000}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {homePageData?.map((step, index) => (
                <div key={step.title} className={classes.design} >
                  {Math.abs(activeStep - index) <= 2 && (
                    (device === 'mobile') ? (<CardMedia
                      style={{
                        backgroundImage: `url('./backimage.png'), url(${step.selectedFile})`,
                      }}
                      className={classes.media}
                      title={step.title} />) : (<CardMedia
                        style={{
                          backgroundImage: `url(${step.selectedFile})`,
                        }}
                        className={classes.media}
                        title={step.title} />
                    )
                  )}
                  <Typography className={classes.title} variant="h5" component="h2">{step.title}</Typography>
                  <Typography className={classes.detail} variant="body2" component="p">{step.detail}</Typography>
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <div className={classes.whyChoose}>
              <Typography gutterBottom variant="h5" style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "black",
                margin: "20px 70px 10px 20px",
                textTransform: "capitalize",
              }}>
                Why choose us ?
              </Typography>
              <div className={classes.details}>
                <Paper
                  elevation={3}
                  style={{
                    padding: "12px 16px",
                    margin: "20px auto",
                    cursor: "pointer",
                    borderRadius: "12px",
                    backgroundColor: "rgba(20,38,65, 0.005)",
                  }}
                >
                  <ButtonBase onClick={() => navigate('/food')} id="orderNow">
                    <Paper style={{ width: "350px", margin: 'auto' }} elevation={0}>
                      <CardMedia
                        style={{
                          backgroundImage: `url('/cycle.png')`,
                        }}
                        className={classes.relatedImage}
                        title='hi'
                      />
                    </Paper>
                  </ButtonBase>
                  <center>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        letterSpacing: "1.5px",
                        margin: "0px auto 30px auto",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        color: "black",
                      }}
                    >
                      Food Delivery
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{
                        letterSpacing: "2px",
                        margin: "10px 0",
                        color: "black",
                        textTransform: "capitalize",
                      }}
                    >
                      <p>Order foods as you like from our</p>
                      <p>website and get to experiene</p>
                      faster food delivery.
                    </Typography>
                    <Button
                      style={{
                        color: "white",
                        borderRadius: "20px",
                        backgroundColor: "rgb(89,87,117)",
                        letterSpacing: "1.1px",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        margin: "10px auto 10px auto",
                        padding: "10px 20px",
                      }}
                      onClick={() => navigate('/food')}
                      name="orderNow"
                    >
                      Order Now
                    </Button>
                  </center>
                </Paper>
                <Paper
                  elevation={3}
                  style={{
                    padding: "12px 16px",
                    margin: "20px auto",
                    cursor: "pointer",
                    borderRadius: "12px",
                    backgroundColor: "rgba(20,38,65, 0.005)",
                  }}
                >
                  <Paper style={{ width: "350px", margin: 'auto' }} elevation={0}>
                    <ButtonBase onClick={() => navigate('/room')} id="bookNow">
                      <CardMedia
                        style={{
                          backgroundImage: `url('/bed.png')`,
                        }}
                        className={classes.relatedImage}
                        title='hi'
                      />
                    </ButtonBase>
                  </Paper>
                  <center>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        letterSpacing: "1.5px",
                        margin: "0px auto 30px auto",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        color: "black",
                      }}
                    >
                      Comfortable Rooms
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{
                        letterSpacing: "2px",
                        margin: "10px 0",
                        color: "black",
                        textTransform: "capitalize",
                      }}
                    >
                      <p>We have every sized</p>
                      <p>bed rooms with comfy beds</p>
                      and various amenities.
                    </Typography>
                    <Button
                      gutterBottom
                      style={{
                        color: "white",
                        borderRadius: "20px",
                        backgroundColor: "rgb(89,87,117)",
                        letterSpacing: "1.1px",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        padding: "10px 20px",
                        margin: "10px auto 10px auto",
                      }}
                      onClick={() => navigate('/room')}
                      id='bookNow'
                    >
                      Book Now
                    </Button>
                  </center>
                </Paper>
              </div>
              <Paper
                elevation={0}
                style={{
                  padding: "20px 20px",
                  margin: "20px auto 0px auto",
                  cursor: "pointer",
                  borderRadius: "12px",
                  width: "90%",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "black",
                    textTransform: "capitalize",
                  }}>
                  About Us
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    letterSpacing: "2px",
                    margin: "10px 0",
                    fontSize: "18px",
                    color: "black",
                    textTransform: "none",
                    textAlign: "justify",
                    lineHeight: "1.5",
                  }}
                >
                  A world away from the everyday, PRABANDHAK creates the time and space for you to rediscover the meaning of relaxation, well taken care of by our attentive yet discreet hospitality. <br />
                  Designed in harmony with the natural environment, the resort seamlessly blends traditional Nepali architecture with contemporary elegance and modern comforts. Luxuriate in the privacy of the resort’s beachfront and over-water villas that offer an oasis just steps from the sand, or the pleasure of slipping straight from your deck into the cool, clear waters to reach your own private lagoon.
                </Typography>
              </Paper>
            </div>
          </>
        }
      </Grid>
    </Grid >
  );
}

export default Slider;
