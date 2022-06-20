import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '90%',
        maxWidth: '630px',
        maxHeight: '250px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 'auto',
        },
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px 15px',
    },
    buy: {
        margin: 'auto',
        padding: '8px 40px',
        border: '0px solid white',
        borderRadius: '12px',
        backgroundColor: '#595775',
        '&:hover': {
            backgroundColor: '#595775',
        },
        color: 'white',
    },
    title: {
        textTransform: 'uppercase',
        display: 'inline-block',
        fontWeight: 'bold',
        letterSpacing: '1.3px',
        color: 'black',
        marginTop: '10px',
    },
    time: {
        display: 'inline-block',
        padding: '10px',
        color: 'gray',
    },
    message: {
        padding: '5px',
        color: 'gray',
        margin: '10px',
    },
    tagStyle: {
        borderRadius: '6px',
        padding: '3px 7px',
        margin: '2px 3px',
        fontSize: '14px',
        backgroundColor: '#595775',
        '&:hover': {
            backgroundColor: '#595775',
        },
        color: 'white',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            padding: '5px',
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
    },
    section1: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    imageSection: {
        margin: 'auto',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}));