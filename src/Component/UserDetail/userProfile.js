import React, { useState, useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditUser from './EditUser';
import { singleUser } from '../redux/actions/Auth';

export default function SimpleMenu() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(singleUser(user?.result._id));
    }, [user?.result._id, dispatch]);
    const { AsingleUser } = useSelector(state => state.Auth);

    const [aUser, setaUser] = useState();
    useEffect(() => {
        setaUser(AsingleUser);
    }, [AsingleUser]);
    const [openM, setOpenM] = React.useState(false);
    const handleOpenM = () => {
        setOpenM(true);
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem('profile');
        navigate('/');
        setUser(null);
    };

    return (
        <div style={{
            marginTop: '4%',
        }} >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper elevation={5} style={{
                    backgroundImage: 'linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)',
                    borderRadius: '10px',
                }}>
                    <CardHeader
                        avatar={
                            <Avatar style={{ backgroundColor: '#4abdac', color: 'white' }} aria-label="recipe">
                                {aUser?.name.charAt(0)}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenM}>
                                <MoreVertIcon sx={{ color: 'white' }} />
                            </IconButton>
                        }
                        title={aUser?.name}
                        style={{ color: 'white' }}
                    />
                    <div style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto'
                    }} >
                        <CardMedia
                            component="img"
                            height="300"
                            image={aUser?.selectedFile}
                            alt="Paella dish"
                        />
                    </div>
                    <CardContent style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridGap: '20px',
                        color: 'white',
                        backgroundColor: '#4abd',
                    }} >
                        <Typography variant="body2" component="p">
                            <b>Name:</b> {aUser?.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <b>Email:</b> {aUser?.email}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <b>Number:</b> {aUser?.number}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <b>Address:</b> {aUser?.address}
                        </Typography>
                        <IconButton aria-label="add to favorites" style={{
                            backgroundColor: '#4abdac',
                            borderRadius: '500px',
                        }} onClick={logout} >
                            <LogoutIcon style={{
                                color: 'white',
                            }} />
                        </IconButton>
                        <EditUser openM={openM} setOpenM={setOpenM} aUser={aUser} />
                        <IconButton aria-label="share" style={{
                            backgroundColor: '#4abdac',
                            borderRadius: '500px',
                        }}>
                            <DeleteIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </CardContent>
                </Paper>
            </div>
        </div >
    );
}