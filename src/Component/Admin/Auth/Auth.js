import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup } from '../../redux/actions/Auth';
import useStyles from './Styles';
import Input from './Input';
import Google from './Google';

import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";



const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', address: '', number: '' };
const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

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
        // eslint-disable-next-line default-case
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
      dispatch(signup({ ...formData, selectedFile: imageUrl }, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Grid container className={isSignup ? classes.container : classes.container1}>
      <div style={isSignup ? {
        backgroundImage: 'url(/prabandhak.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
      } : {
        backgroundImage: 'url(/prabandhak.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
      }}>
        <div className={isSignup ? classes.Style : classes.Style1}>
          <Paper className={isSignup ? classes.paper : classes.paper1} elevation={3}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" className={classes.title} >{isSignup ? 'Sign up' : 'Sign in'}</Typography>
            </div>
            <Google isSignup={isSignup} />
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
                {isSignup && <Input name="address" label="Address" handleChange={handleChange} half />}
                {isSignup && <Input name="number" label="Phone Number" handleChange={handleChange} half />}
                {isSignup ? progress ?
                  <div style={{ padding: '7px 0', width: '98%', margin: '20px auto', textAlign: 'center' }}>
                    <Typography variant="body1">{progress}</Typography>
                  </div> :
                  <div style={{ textAlign: "center", display: 'inline-block' }} ><input style={{ padding: '20px 0px', marginLeft: "50px", width: '50%', color: 'white' }} type="file" id='selectedFile' name='selectedFile' onChange={(e) => setimage({ ...image, selectedFile: e.target.files[0] })} />
                    <Button variant="contained" style={{ backgroundColor: 'rgb(32 51 85) ', margin: '10px 1px', color: 'white', display: 'inline-block' }} size="large" onClick={upload}>Upload Image</Button></div> : null}
              </Grid>
              <Button type="submit" fullWidth variant="contained" className={classes.submit} style={isSignup ? { marginBottom: '10px' } : { marginBottom: '1px' }}>
                {isSignup ? 'Sign Up' : 'Sign In'}
              </Button>
              <Grid container justifyContent="flex-end" style={{
                margin: '0px',
                padding: '0px',
              }}>
                <Grid item>
                  <Button onClick={switchMode} style={isSignup ? {
                    color: 'white',
                    marginTop: '10px 1px',
                    backgroundColor: 'rgb(32 51 85) ',
                    display: 'inline-block',
                  } : { color: 'white', backgroundColor: 'rgb(32 51 85) ', margin: '10px 1px', display: 'inline-block' }}>
                    {isSignup ? `Already have an account? Sign in` : "Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </div>
    </Grid >
  );
};

export default SignUp;