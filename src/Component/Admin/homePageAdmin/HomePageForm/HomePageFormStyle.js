import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextField: {
    margin: '10px auto',
    maxWidth: '80%',
  },
  buttonSubmit: {
    margin: '5px auto',
    width: '35%',
    backgroundColor: '#595775',
    '&:hover': {
      backgroundColor: '#595775',
    },
  },
  buttonSubmit1: {
    margin: '5px auto',
    width: '35%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: 'white',
  },
  upload: {
    margin: '5px auto',
  },
  title: {
    paddingTop: '20px',
    paddingBottom: '20px',
    margin: '0px auto',
    textTransform: 'Capitalize',
    textAlign: 'center',
    letterSpacing: '2px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#525252',
  }

}));