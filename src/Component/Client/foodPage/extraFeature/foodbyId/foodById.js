import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
    Paper,
    Typography,
    Divider,
    CardActions,
    Button,
    CardMedia,
} from "@material-ui/core/";
import { getFoodById, getFoodBySearch } from "../../../../redux/actions/foodPageaction";
import useStyles from "./foodByIdCss";
import moment from "moment";
import Loading from "../../../../redux/actions/loading/loading";
import Comment from './commentFood/commentFood';

const FoodDetail = () => {
    const navigate = useNavigate();
    const openPost = (id) => {
        navigate(`/food/${id}`);
    }; const classes = useStyles();
    const dispatch = useDispatch();
    const { foodPageData, foodByData, isLoading } = useSelector((state) => state.foodPage);
    const user = JSON.parse(localStorage.getItem("profile"));
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getFoodById(id));
        }
    }, [dispatch, id]);
    useEffect(() => {
        if (foodByData?.tags?.length > 0) {
            dispatch(getFoodBySearch({ search: "none", tags: foodByData?.tags?.join(",") }));
        }
    }, [dispatch, foodByData]);

    if (user === null) return navigate("/auth");
    if (isLoading) {
        return (
            <div style={{
                padding: "70px 0px 20px 0px", backgroundImage: 'url(/prabandhak.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }}>
                <Paper
                    elevation={3}
                    style={{
                        margin: '10px 10px',
                        backgroundColor: 'rgba(32,52,85, 0.8)',
                        borderRadius: "12px",
                        height: "120vh",
                    }}
                >
                    <Loading />
                </Paper>
            </div>
        );
    }
    const recommented = foodPageData?.filter(({ _id }) => _id !== foodByData?._id);
    return (
        <div style={{
            padding: "70px 0px 20px 0px",
            backgroundImage: 'url(/prabandhak.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
        }}>
            <Paper elevation={3} style={{
                borderRadius: "12px", margin: '10px 10px', backgroundColor: 'rgba(32,52,85, 0.8)',
                backgroundBlendMode: 'darken',
            }}>
                <div className={classes.card}>
                    <div className={classes.section}>
                        <div className={classes.section1} key={foodByData?._id}>
                            <div className={classes.imageSection} style={{ flex: 1 }}>
                                <img
                                    className={classes.media}
                                    src={foodByData?.selectedFile}
                                    title={foodByData?.title}
                                    alt={foodByData?.title}
                                />
                            </div>
                            <div style={{ margin: "auto", flex: "1" }}>
                                <Typography className={classes.title}>
                                    {foodByData?.title}
                                </Typography>
                                <Typography className={classes.time}>
                                    {moment(foodByData?.createdAt).format("MMMM, Do YYYY")}
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
                                        {foodByData?.tags
                                            .map((tag) => (
                                                <Button
                                                    style={{
                                                        backgroundColor: "rgba(20,38,65, 0.65)",
                                                        "&:hover": {
                                                            backgroundColor: "rgb(20,38,65)",
                                                        },
                                                        letterSpacing: "2px",
                                                        borderRadius: "6px",
                                                        color: "white",
                                                        padding: "5px 10px",
                                                        margin: "2px 5px",
                                                        fontSize: "14px",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    {tag}
                                                </Button>
                                            ))
                                            .splice(-3)}
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
                                    {foodByData?.description}
                                </Typography>
                                <CardActions>
                                    <Button
                                        size="small"
                                        className={classes.buy}
                                    >
                                        Price Rs.{foodByData?.price}
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.buy}
                                    >
                                        Buy Now
                                    </Button>
                                </CardActions>
                            </div>
                        </div>
                        <Divider style={{ margin: "20px 0", backgroundColor: 'rgb(16,28,48)', padding: '5px 10px' }} />
                        <Comment food={foodByData} />
                    </div>
                    {!!recommented.length && (
                        <div className={classes.section2}>
                            <Divider style={{ margin: "20px 0", backgroundColor: 'rgb(16,28,48)', padding: '5px 10px' }} />

                            <Typography gutterBottom variant="h5" style={{
                                fontSize: "22px",
                                fontWeight: "bold",
                                color: "white",
                                textTransform: "capitalize",
                            }}>
                                You might also like:
                            </Typography>
                            <div className={classes.recommendedPosts}>
                                {recommented
                                    ?.slice(0, 8)
                                    .map(({ title, tags, description, selectedFile, _id }) => (
                                        <Paper
                                            elevation={3}
                                            style={{
                                                padding: "12px 16px",
                                                margin: "20px auto",
                                                cursor: "pointer",
                                                backgroundColor: "rgba(20,38,65, 0.8)",
                                            }}
                                            onClick={() => openPost(_id)}
                                            key={_id}
                                        >
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                style={{
                                                    letterSpacing: "1.5px",
                                                    marginTop: "10px",
                                                    textTransform: "capitalize",
                                                    fontWeight: "600",
                                                    color: "white",
                                                }}
                                            >
                                                {title.split(" ").slice(0, 2).join(" ")}
                                            </Typography>

                                            <Typography
                                                gutterBottom
                                                variant="subtitle2"
                                                style={{
                                                    color: "white",
                                                    letterSpacing: "1.1px",
                                                    fontWeight: "300",
                                                }}
                                            >
                                                {description?.split(" ").splice(0, 4).join(" ")}..
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="subtitle2"
                                                style={{
                                                    letterSpacing: "2px",
                                                    margin: "10px 0",
                                                    color: "lightgray",
                                                }}
                                            >
                                                {tags
                                                    .map(tag =>
                                                        <Button
                                                            style={{
                                                                backgroundColor: "rgba(32,52,85)",
                                                                "&:hover": {
                                                                    backgroundColor: "rgb(32,52,85)",
                                                                },
                                                                letterSpacing: "2px",
                                                                borderRadius: "6px",
                                                                color: "white",
                                                                padding: "3px 8px",
                                                                margin: "0px 5px",
                                                                fontSize: "14px",
                                                                textTransform: "capitalize",
                                                            }}
                                                        >
                                                            {tag}
                                                        </Button>
                                                    )
                                                    .splice(-2)}
                                            </Typography>
                                            <Paper style={{ width: "220px" }} elevation={0}>
                                                <CardMedia
                                                    style={{
                                                        backgroundImage: `url('./backimage.png'), url(${selectedFile})`,
                                                    }}
                                                    className={classes.relatedImage}
                                                    title={title}
                                                />
                                            </Paper>
                                        </Paper>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </Paper>
        </div>
    );
};

export default FoodDetail;
