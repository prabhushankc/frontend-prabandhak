import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup } from '../../redux/actions/Auth';
import useStyles from './Styles';
import Input from './Input';
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', address: '', number: '' };

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [Error, setError] = useState(null);
  const [ErrorSignIn, setErrorSignIn] = useState(null);
  const [success, setsuccess] = useState(null);
  const { errorAuthSignUp, errorAuthSignIn, authData } = useSelector((state) => state.Auth);
  useEffect(() => {
    setError(errorAuthSignUp);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [errorAuthSignUp]);
  useEffect(() => {
    setErrorSignIn(errorAuthSignIn);
    setTimeout(() => {
      setErrorSignIn(null);
    }, 3000);
  }, [errorAuthSignIn]);

  useEffect(() => {
    setsuccess(authData?.message);
    setTimeout(() => {
      setsuccess(null);
    }, 8000);
  }, [authData]);
  console.log(success, 'sus');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const handleShowPassword = () => { setShowPassword(!showPassword) };
  const handleShowCPassword = () => { setShowCPassword(!showCPassword) };
  const [image, setimage] = useState({ selectedFile: '' });
  const [imageUrl, setimageUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  const switchMode = () => {
    setError(null);
    setErrorSignIn(null);
    setsuccess(null);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const upload = () => {
    if (!image.selectedFile) return;
    const sotrageRef = ref(storage, `images/${image.selectedFile.name}`);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup({ ...formData, selectedFile: imageUrl }));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs" className={isSignup ? classes.container : classes.container1} >
      <Paper className={isSignup ? classes.paper : classes.paper1} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ letterSpacing: '2px', fontWeight: "500", textTransform: 'uppercase' }}>{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.formData} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" type={showCPassword ? 'text' : 'password'} handleShowCPassword={handleShowCPassword} handleChange={handleChange} />}
            {isSignup && <Input name="address" label="Address" handleChange={handleChange} />}
            {isSignup && <Input name="number" label="Phone Number" handleChange={handleChange} />}
            {isSignup ? progress ?
              <div style={{ padding: '7px 0', width: '98%', margin: '20px auto', textAlign: 'center' }}>
                <Typography variant="body1">{progress}</Typography>
              </div> :
              <div style={{ textAlign: "center" }} ><input style={{ padding: '20px 0px', marginLeft: "50px" }} type="file" id='selectedFile' name='selectedFile' onChange={(e) => setimage({ ...image, selectedFile: e.target.files[0] })} />
                <Button variant="contained" style={{ backgroundImage: 'linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)', margin: '10px 1px', color: 'white' }} size="large" onClick={upload}>Upload Image</Button></div> : null}
          </Grid>
          {(ErrorSignIn || Error || success) && <Typography className={(success ? classes.success : classes.Error)}>{(ErrorSignIn?.slice(0, -2) || Error?.slice(0, -2) || success?.slice(0, -2))}</Typography>}
          <Button type="submit" fullWidth variant="contained" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? `Already have an account? Sign in` : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;