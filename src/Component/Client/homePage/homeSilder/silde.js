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
import { Typography, Button, Grid, CardMedia } from '@material-ui/core';
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
        }}><div style={{
          backgroundImage: 'url(/prabandhak.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
        }} >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', height: '100vh' }}><CircularProgress style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              height: '50px',
              width: '50px',
              color: 'white',
              zIndex: '999',
            }} /></div></div></Grid> :
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
                <Button variant="contained" className={classes.button} onClick={
                  () => {
                    navigate('/room');
                  }
                } >
                  Book Room
                </Button>
                <Button variant="contained" className={classes.button2} onClick={
                  () => {
                    navigate('/food');
                  }
                } >
                  Order Food
                </Button>
              </div>
            ))}
          </AutoPlaySwipeableViews>
        }
      </Grid>
    </Grid >
  );
}

export default Slider;
