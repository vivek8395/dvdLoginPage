import React from 'react'
import Navbar from './pages/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LoginCard from './pages/LoginCard';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
      height:'85vh'
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

const Login = () => {
    const classes = useStyles();
    return (
        <>
        <div><Navbar/></div>
          
        <Grid container spacing={3}>
        {/* <Grid item xs={7}>
        <Paper className={classes.paper}>NA</Paper>
        </Grid> */}

        <Grid item xs={12}>
        <Paper className={classes.paper}> 
        <LoginCard/>
        </Paper>
        </Grid>
        </Grid>
      
      
        </>
    )
}

export default Login
