import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchFoodPage, deleteFood } from '../../../redux/actions/foodPageaction';
import useStyles from './foodPagePostStyle';
import { CircularProgress } from '@mui/material';
import { Typography, Paper, Divider, CardActions, Button } from '@material-ui/core';
import moment from 'moment';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
function FoodPostAdmin() {
    const dispatch = useDispatch();
    const { isLoading, foodPageData } = useSelector((state) => state.foodPage);
    const reverse = foodPageData.reverse();
    console.log(reverse);
    useEffect(() => {
        return () => {
            dispatch(fetchFoodPage());
        }
    }, [dispatch]);
    const classes = useStyles();
    return (
        isLoading ? <CircularProgress style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '999',
            width: '100px',
            height: '100px'
        }} /> :
            (<div style={{ borderRadius: "15px", padding: "80px 15px 20px 15px" }}>
                {foodPageData?.reverse().map((foodData) => (
                    <Paper key={foodData._id} elevation={3} style={{ borderRadius: "12px", margin: '10px auto' }}>
                        <div key={foodData._id} className={classes.card}>
                            <div className={classes.section}>
                                <div className={classes.section1}>
                                    <div className={classes.imageSection}>
                                        <img
                                            className={classes.media}
                                            src={foodData?.selectedFile}
                                            title={foodData?.title}
                                        />
                                    </div>
                                    <div style={{ margin: "auto", flex: 1 }}>
                                        <Typography className={classes.title}>
                                            {foodData?.title}
                                        </Typography>
                                        <Typography className={classes.time}>
                                            {moment(foodData?.createdAt).format("MMMM DD")}
                                        </Typography>
                                        <div className={classes.details}>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="h2"
                                                style={{
                                                    marginTop: "10px",
                                                    letterSpacing: "1px",
                                                    color: "lightgray",
                                                }}
                                            >
                                                {foodData.tags.map((tag) =>
                                                (
                                                    <Button className={classes.tagStyle} >
                                                        {tag}
                                                    </Button>)
                                                ).splice(-2)}
                                            </Typography>
                                        </div>
                                        <Typography
                                            gutterBottom
                                            variant="body1"
                                            component="p"
                                            style={{
                                                textAlign: "justify",
                                                letterSpacing: "2px",
                                                lineHeight: "2",
                                            }}
                                            className={classes.message}
                                        >
                                            {foodData?.description.split(" ").splice(0, 4).join(" ")} and Price is {" "}
                                            <span
                                            >
                                                Rs.{foodData?.price}
                                            </span>
                                        </Typography>
                                        <Typography gutterBottom
                                            variant="body1"
                                            component="p"
                                            style={{
                                                textAlign: "justify",
                                                letterSpacing: "2px",
                                                lineHeight: "2",
                                            }}
                                            className={classes.message} >
                                            Available {foodData?.quantity}
                                        </Typography>
                                        <Divider style={{ margin: "20px 0" }} />
                                        <CardActions className={classes.cardActionsS}>
                                            <Button
                                                size="small"
                                                className={classes.buy}
                                                style={{ backgroundColor: "#01bf71" }}
                                            >
                                                <Edit />
                                            </Button>
                                            <Button
                                                size="small"
                                                className={classes.buy}
                                                style={{ backgroundColor: "#ff4d4d" }}
                                                onClick={() => dispatch(deleteFood(foodData?._id))}
                                            >
                                                <Delete />
                                            </Button>
                                        </CardActions>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                ))}
            </div>)
    );
}

export default FoodPostAdmin;
