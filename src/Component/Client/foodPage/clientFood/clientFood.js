import React, { useEffect } from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Paper } from '@material-ui/core/';
import useStyles from './clientFoodStyle';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchFoodPage } from '../../../redux/actions/foodPageaction';
import FoodHeaderPage from './FoodHeaderPage';

const ClientFoodView = () => {
    const dispatch = useDispatch();
    const { foodPageData, isLoading } = useSelector((state) => state.foodPage);
    useEffect(() => {
        return () => {
            dispatch(fetchFoodPage());
        }
    }, [dispatch]);
    const classes = useStyles();
    return (
        <>
            <FoodHeaderPage foodLength={foodPageData.length} />
            <Grid className={classes.container} container alignItems="stretch" spacing={2}>
                {foodPageData.map((foodData) => (
                    <Grid key={foodData._id} item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.cards} raised elevation={3}>
                            <ButtonBase component="span"
                                name="test"
                                className={classes.cardAction} >
                                <CardMedia className={classes.media} style={{ backgroundImage: `url(${foodData.selectedFile})` }} title={foodData.title.split(" ").splice(0, 1)} />
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {foodData.title.split(" ").splice(0, 2).join(" ")}
                                </Typography>
                                <CardContent className={classes.cartTitle} >
                                    <Typography variant="body2" color="textSecondary" component="p">{foodData.description.split(' ').splice(0, 13).join(' ')}...</Typography>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: "12px"
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{

                                        }}>Available: <span style={{
                                            color: "gray",
                                            fontWeight: "bold"
                                        }}>{foodData.quantity}</span></Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{

                                        }}>Price: <span style={{
                                            color: "gray",
                                            fontWeight: "bold"
                                        }}>Rs.{foodData.price}/</span></Typography>
                                    </div>
                                </CardContent>
                                <div className={classes.details}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="h2"
                                    >
                                        {foodData.tags.map((tag) =>
                                        (
                                            <Button style={{
                                                backgroundColor: '#595775',
                                                '&:hover': {
                                                    backgroundColor: '#595775',
                                                },

                                                borderRadius: '6px',
                                                color: 'white',
                                                padding: '3px 7px',
                                                margin: '2px 3px',
                                                fontSize: '13px',
                                            }} >
                                                {tag}
                                            </Button>)
                                        ).splice(-2)}
                                    </Typography>
                                </div>
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
    )
}

export default ClientFoodView;
