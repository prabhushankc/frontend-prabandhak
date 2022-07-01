import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchFoodPage, deleteFood } from '../../../redux/actions/foodPageaction';
import useStyles from './foodPagePostStyle';
import { Typography, Paper, Divider, CardActions, Button, Grid } from '@material-ui/core';
import moment from 'moment';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function FoodPostAdmin({ setupdateFoodCurrentId }) {
    const dispatch = useDispatch();
    const { isLoading, foodPageData } = useSelector((state) => state.foodPage);
    const query = useQuery();
    const page = query.get('page');
    const limit = query.get('limit');
    const sort = query.get('sort');
    const foodquery = {
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : 4,
        sort: sort ? sort : "createdAt",
    };
    useEffect(() => {
        return () => {
            dispatch(fetchFoodPage(foodquery));
        }
    }, [dispatch]);
    const classes = useStyles();
    return (
        isLoading ? <Grid container style={{
            padding: '0px',
            margin: '0px',
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', height: '100vh' }}>
                <div style={{
                    color: 'white',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    letterSpacing: '3px',
                }}>Loading</div>
            </div>
        </Grid> :
            (<div style={{ borderRadius: "15px", padding: "80px 15px 20px 15px" }}>
                {foodPageData?.map((foodData) => (
                    <Paper key={foodData?._id} elevation={3} style={{ borderRadius: "12px", margin: '10px auto' }}>
                        <div className={classes.card}>
                            <div className={classes.section}>
                                <div className={classes.section1}>
                                    <div className={classes.imageSection}>
                                        <img
                                            alt={foodData?.title}
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
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setupdateFoodCurrentId(foodData?._id)
                                                }}
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
