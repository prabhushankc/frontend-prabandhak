import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    design: {
        position: 'relative',
        margin: '0px',
        paddingTop: '22px',
    },
    media: {
        height: '50vh',
        objectFit: 'cover',
        width: '100%',
        margin: '0px auto',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        position: 'absolute',
        top: '70%',
        left: '50%',
        width: '100%',
        textAlign: 'center',
        transform: 'translate(-50%, -70%)',
        color: 'white',
        fontSize: '2rem',
        letterSpacing: '7px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textShadow: '2px 1px 2px #white',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            fontSize: '1.4rem',
            letterSpacing: '4px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
            letterSpacing: '2px',
        },
    },
    detail: {
        position: 'absolute',
        top: '79%',
        left: '50%',
        transform: 'translate(-50%, -79%)',
        width: '100%',
        textAlign: 'center',
        color: '#f5f5f5',
        fontSize: '1rem',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        textShadow: '1px 1px 2px #fff',
        [theme.breakpoints.down('sm')]: {
            top: '68%',
            left: '50%',
            transform: 'translate(-50%, -68%)',
            fontSize: '1rem',
            letterSpacing: '4px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
            letterSpacing: '2px',
        }
    },

}));

