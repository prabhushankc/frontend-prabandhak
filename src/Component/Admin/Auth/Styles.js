import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: '0px',
    margin: '0px',
    height: '100%',
  },
  container1: {
    padding: '0px',
    margin: '0px',
    height: '100%',
  },
  Style: {
    marginTop: '25px',
    height: '102vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '100px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '80px',
      height: '140vh',
    }
  },
  Style1: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    borderRadius: '0.5rem',
    maxWidth: '500px',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    margin: theme.spacing(3),
    backgroundColor: 'transparent',
    border: '1px solid #17253e',
  },
  paper1: {
    maxWidth: '400px',
    borderRadius: '0.5rem',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    // backgroundColor: '#17253e',
    backgroundColor: 'transparent',
    border: '1px solid #17253e',
  },
  title: {
    letterSpacing: '2px',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'white'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(32 51 85) ',
  },
  formData: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
    backgroundColor: 'rgb(32 51 85) ',
    color: 'white',
    letterSpacing: '3px',
    padding: '0.4rem 0.7rem',
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgb(32 51 85) ',
      color: 'white',
    }
  },
  googleButton: {
    marginBottom: theme.spacing(-1),
    marginTop: theme.spacing(0),
    backgroundColor: 'rgb(32 51 85)',
    color: 'white',
    fontSize: '15px',
    padding: '0.4rem 1rem',
    letterSpacing: '1px',
    '&:hover': {
      backgroundColor: 'rgb(32 51 85)',
    }
  },
  googleButton1: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    backgroundColor: 'rgb(32 51 85)',
    color: 'white',
    fontSize: '15px',
    padding: '0.4rem 1rem',
    letterSpacing: '1px',
    '&:hover': {
      backgroundColor: 'rgb(32 51 85)',
    }
  },
}));