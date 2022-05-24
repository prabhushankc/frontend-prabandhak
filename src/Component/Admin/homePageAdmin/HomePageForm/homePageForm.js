import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './HomePageFormStyle';
import { createHomePage } from '../../../redux/actions/homePage';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const HomePageForm = () => {
    const [postData, setPostData] = useState({ title: '', description: '', detail: '' });
    const [image, setimage] = useState({ selectedFile: '' });
    const [imageUrl, setimageUrl] = useState(null);
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    const clear = () => {
        setPostData({ title: '', description: '', detail: '' });
        setimage({ selectedFile: '' });
        setimageUrl(null);
        setProgress(0);
    };

    const upload = () => {
        if (!image.selectedFile) return;
        const sotrageRef = ref(storage, `files/${image.selectedFile.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, image.selectedFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused": // or 'paused'
                        setProgress("Upload is paused");
                        break;
                    case "running": // or 'running'
                        setProgress("Upload is " + progress + "% done");
                        break;
                }
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setimageUrl(downloadURL);
                });
            });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createHomePage({ ...postData, selectedFile: imageUrl }));
    };
    return (
        <>
            <Typography variant="h6" className={classes.title} >Home Page Details</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Grid container spacing={3} item sm={6} md={6} >
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} className={classes.TextField} />
                    <TextField name="Description" variant="outlined" label="Description" fullWidth multiline minRows={3} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} className={classes.TextField} />
                </Grid>
                <Grid container spacing={3} item sm={6} md={6}>
                    <TextField name="Detail" variant="outlined" label="Detail" fullWidth value={postData.detail} onChange={(e) => setPostData({ ...postData, detail: e.target.value })} className={classes.TextField} />
                    {progress ?
                        <div style={{ padding: '7px 0', width: '98%', margin: '20px auto', textAlign: 'center' }}>
                            <Typography variant="body1">{progress}</Typography>
                        </div> :
                        <div style={{ textAlign: "center" }} ><input style={{ padding: '20px 0px', marginLeft: "50px" }} type="file" id='selectedFile' name='selectedFile' onChange={(e) => setimage({ ...image, selectedFile: e.target.files[0] })} />
                            <Button variant="contained" size="small" className={classes.upload} onClick={upload}><UploadFileIcon /></Button></div>}
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
                    <Button variant="contained" className={classes.buttonSubmit1} size="large" onClick={clear} >Clear</Button>
                </Grid>
            </form>
        </>
    );
}

export default HomePageForm;