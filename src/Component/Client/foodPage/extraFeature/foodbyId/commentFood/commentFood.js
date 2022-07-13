import React, { useState, useRef } from "react";
import { Typography, Button, Avatar, Paper } from "@material-ui/core/";
import { Report, StarBorder } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { commentFood, deleteCommentFood } from "../../../../../redux/actions/foodPageaction";
import { NotifyError, NotifySuccess, NotifyWarning, NotifyInfo } from "../../../../../redux/actions/notify";
import { reportByUser } from "../../../../../redux/actions/Auth";
import useStyles from "../foodByIdCss";
import StyleTextField from "../../../../../Extra/styleTextField"

const CommentSection = ({ food }) => {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const classes = useStyles();
    const commentsRef = useRef();
    const [updated, setUpdated] = useState(false);
    const { AsingleUser } = useSelector(state => state.Auth);
    const [commentData, setCommentData] = useState({
        comments: "",
        userId: AsingleUser?._id,
        foodId: food?._id,
        foodImage: food?.selectedFile,
        userImage: AsingleUser?.selectedFile,
        createdAt: new Date(),
    });
    const { foodPageData } = useSelector((state) => state.foodPage);
    const findCommentById = foodPageData?.find((comment) => comment._id === food?._id);

    let reversefindCommentById = [];
    let index = 0;
    for (let i = findCommentById?.comments?.length - 1; i >= 0; i--) {
        reversefindCommentById[index] = findCommentById?.comments[i];
        index++;
    }
    const handleComment = async () => {
        await dispatch(
            commentFood(food._id, { ...commentData, comments: `${AsingleUser?.name}: ${comment}` }, updated)
        );
        commentsRef.current.scrollIntoView({ behavior: "smooth" });
        setComment("");
    };
    const updatedText = () => {
        const userId = AsingleUser?._id;
        const commentByUserId = findCommentById?.comments.filter((comment) => comment.userId === userId)[0];
        setComment(commentByUserId.comments.split(":")[1])
    }
    const deleteComment = async () => {
        await dispatch(deleteCommentFood(food._id, AsingleUser?._id));
    }
    const fakeUser = AsingleUser?.report.length <= 3 ? false : true;
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [report, setReport] = useState(false);
    const [reportReason, setReportReason] = useState("");
    const [whatWasComment, setWhatWasComment] = useState("");
    const handleReport = (userId, toWhom) => {
        !fakeUser && NotifyInfo(`Please write the reason for reporting ${toWhom.split(": ")[0].toLowerCase()}`);
        setUserId(userId);
        setUserName(toWhom.split(": ")[0].toLowerCase());
        setWhatWasComment(toWhom.split(": ")[1].toLowerCase());
    }
    const SecondhandleReport = async () => {
        if (reportReason === "") return NotifyWarning("Please enter a reason");
        const reportData = {
            reporterUserId: AsingleUser?._id,
            productId: food._id,
            reason: reportReason,
            whatWasComment: whatWasComment,
            date: new Date()
        }
        await dispatch(reportByUser(userId, reportData));
        setReport(false);
        setReportReason("");
    }
    return (
        <div>
            <div style={{ width: "90%", margin: 'auto', display: 'flex' }}>
                <Avatar src={AsingleUser?.selectedFile} style={{ width: '50px', height: '50px', margin: '0.4rem 1rem 0rem 0rem' }} />
                {report ?
                    <StyleTextField
                        fullWidth
                        multiline
                        variant="outlined"
                        autoFocus={true}
                        inputProps={{ maxLength: 75, style: { fontSize: "1.1rem", color: 'white' } }}
                        label={fakeUser ? "Comment is restricted" : `Reason for Reporting ${userName}`}
                        InputLabelProps={fakeUser ? { style: { fontSize: "1rem", color: '#f50057' } } : { style: { fontSize: "1rem", color: 'white' } }}
                        value={reportReason}
                        onChange={(e) => setReportReason(e.target.value)}
                    />
                    :
                    <StyleTextField
                        fullWidth
                        multiline
                        variant="outlined"
                        inputProps={{ maxLength: 75, style: { fontSize: "1.1rem", color: 'white' } }}
                        label={fakeUser ? "You're not allowed to comment" : "Write a comment"}
                        InputLabelProps={fakeUser ? { style: { fontSize: "1rem", color: 'red' } } : { style: { fontSize: "1rem", color: 'white' } }}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />}
                <Button
                    style={{
                        margin: "5px 20px",
                        backgroundColor: "rgb(16, 32, 48)",
                        padding: "0.5rem 1rem",
                        color: "#fff",
                        // width: "12%",
                        height: "100%",
                        cursor: "pointer",
                        fontSize: "1rem",
                        letterSpacing: "1px",
                        fontWeight: "bold",
                    }}
                    variant="contained"
                    onClick={() => {
                        fakeUser ? NotifyError("Banned because you're affecting other user") :
                            report ? SecondhandleReport() : handleComment()
                    }}
                >
                    {!report ? "Comment" : "report"}
                </Button>
            </div>
            <Typography
                gutterBottom
                variant="h6"
                style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "#fff",
                    margin: "0.5rem 7rem",
                }}
            >
                Comments {findCommentById?.comments?.length}
            </Typography>
            <div className={classes.commentsInnerContainer}>

                {reversefindCommentById.map((c, i) => (
                    <Paper style={{
                        backgroundColor: "rgb(16, 32, 48)",
                        color: "#fff",
                        width: "100%",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        letterSpacing: "1px",
                        fontWeight: "bold",
                        display: "flex",
                        margin: "0rem auto 1rem auto",
                    }} key={i} >
                        <Avatar src={c?.userImage} style={{ width: '50px', height: '50px', margin: '0.4rem 1rem 0rem 0rem' }} />
                        <Typography key={i} gutterBottom variant="subtitle1" style={{ color: 'white', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}>
                            <strong>{c?.comments.split(": ")[0]}</strong>
                            {c?.comments.split(":")[1]}
                        </Typography>
                        {(c?.userId === AsingleUser?._id) ? (
                            <>
                                <Button variant="contained" color="secondary" style={{
                                    backgroundColor: 'rbga(16, 28, 48, 0.8)',
                                    color: '#fff',
                                }}
                                    onClick={() => {
                                        deleteComment()
                                    }}
                                > Delete </Button>
                                {!fakeUser && <Button variant="contained" color="secondary" style={{
                                    backgroundColor: 'rbga(16, 28, 48, 0.8)',
                                    color: '#fff',
                                    marginLeft: '10px',
                                }} onClick={() => { setUpdated(true); updatedText() }} > Edit </Button>}
                            </>
                        ) : <>
                            <Button variant="contained" color="primary" style={{
                                color: '#fff',
                                marginRight: '10px',
                            }}>
                                <StarBorder /></Button>
                            <Button variant="contained" color="secondary" style={{
                                color: '#fff',
                            }}
                                onClick={() => {
                                    fakeUser ? NotifyWarning("Banned because you're affecting other user") : setReport(true); handleReport(c?.userId, c?.comments)
                                }}
                            > <Report /></Button></>}
                    </Paper>
                ))}
                <div ref={commentsRef} />
            </div>
        </div>
    );
}

export default CommentSection;
