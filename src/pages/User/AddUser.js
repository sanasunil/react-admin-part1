import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import { addUser } from '../../redux/action';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2)
  },
  content: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));

const AddUser = () => {
    const [state,setState]=useState({
        name:"",
        email: "",
        contact : "",
        address : "",

    });
    const [error,setError] = useState("");

  const{name,email,contact,address}=state;
 let history = useHistory();
 let dispatch = useDispatch();
 const handleInputChange = (e) =>{
     let {name,value} = e.target;
     setState({...state,[name]:value});
 }

 const handleSubmit = (e) =>{
     e.preventDefault();
     if(!name || !email || !address ||!contact){
         setError("All input field is required")
     }else{
        dispatch(addUser(state));
        history.push("/app/user");
        setError("");
     }

 }
 const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline />
        <Paper className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h6" component="h1" color="secondary">
            Add User
          </Typography>
        

        <Button 
           
          variant="contained"  color="secondary"
          onClick={()=>{history.push("/app/user")}}
          >Go Back</Button>
        
        </div> 
        
    {error && <h4 style={{color:"red"}}>{error}</h4>}

    <form noValidate autoComplete='off' onSubmit={handleSubmit}>    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '65ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
         id="outlined-basic"
         name= "name"
         label="Name"
         variant="outlined"
         value={name}
         type="text"
         onChange={handleInputChange} />
      <br/>
      <TextField 
         id="outlined-basic"
         name= "email"
         label="Email"
         variant="outlined"
         value={email}
         type="text"
         onChange={handleInputChange} />
      <br/>
      <TextField 
         id="outlined-basic"
         name= "contact"
         label="Contact"
         variant="outlined"
         value={contact}
         type="number"
         onChange={handleInputChange} />
      <br/>
      <TextField 
         id="outlined-basic"
         name= "address"
         label="Address"
         variant="outlined"
         value={address}
         type="text" 
         onChange={handleInputChange} />
      <br/>
    </Box>
    <div className={classes.toolbar} >
    <Button 
      style={{width:"100px"}} 
      variant="contained" 
      type="submit"  
      color="secondary"
      >Submit</Button>
    </div>
    </form>
    </Paper>
    </div>
  )
}

export default AddUser