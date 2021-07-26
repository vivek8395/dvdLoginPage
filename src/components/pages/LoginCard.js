import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import axios from 'axios'


export default function LoginCard() {
  const classes = useStyles();
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [mobile, setmobile] = useState('')
  const [dob, setdob] = useState('')

  const bull = <span className={classes.bullet}>•</span>;

  async function getUser() {
    try {
      const response = await axios.post('http://atologistinfotech.com/api/register.php',
        {
          params: {
            firstname: fname,
            lastname: lname,
            email: email,
            encryptpassword: password,
            mobile: mobile,
            dob: dob,
          }
        });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

const handler=()=>{

}

  return (
    <div className={classes.container} >
        <form className={classes.item} onSubmit={()=>handler()}>
        <Typography gutterBottom variant="h5" component="h2">Signup Process</Typography>
          <div style={{ display: 'flex', flexDirection: 'row',display:"contents" }}>
          <TextField label="Enter FirstNAme"  />
            <TextField label="Enter LastName" />
          </div>
          <div className={classes.item}>
          <TextField label="Enter EmailID"  />
          <TextField label="phoneNo"  />
          <TextField label="Date of birth"  />
          <TextField label="Password" type="password"  />
          <div className={classes.item}>
          <Button variant="contained" color="primary" onClick={()=>handler()}> SignUp</Button>
          <Link  > Forgot ID/Password ?</Link>
          </div>
          </div>
        </form>
      </div>
  );
}



const useStyles = makeStyles({

  container: {
    backgroundColor: '#f9f9fa',
    width: '70%',
    margin: 'auto',
    height:'auto'
   
  },
  item:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginBottom:'25px',
    marginTop:'25px'
  },
});