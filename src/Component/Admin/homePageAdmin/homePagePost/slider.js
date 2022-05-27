import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
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
        return () => {
            dispatch(fetchHomePage());
        }
    }, [dispatch]);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    // find width of device screen
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [mQ, setMQ] = React.useState(
        width > height ? width : height
    );
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
                {isLoading ? <CircularProgress style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '999',
                    width: '100px',
                    height: '100px'
                }} /> :
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        interval={10000}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {homePageData?.map((step, index) => (
                            <div key={step.title} className={classes.design} >
                                <Typography
                                    style={
                                        {
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            marginTop: '0.9rem',
                                            marginBottom: '1rem',
                                            textDecoration: 'dotted',
                                            textTransform: 'Capitalize',
                                        }
                                    }
                                >Previous Added Detail</Typography>
                                {Math.abs(activeStep - index) <= 2 ? (
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
                                ) : null}
                                <Typography className={classes.title} variant="h5" component="h2">{step.title}</Typography>
                                <Typography className={classes.detail} variant="body2" component="p">{step.detail}</Typography>
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                }
            </Grid>
        </Grid >
    );
}

export default Slider;