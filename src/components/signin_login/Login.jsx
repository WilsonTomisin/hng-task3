import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { createTheme, ThemeProvider } from '@mui/material/styles';



// TODO remove, this demo shouldn't need to reset the theme.
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function Login() {
    const [open, setOpen] = React.useState(true);
    const [email, setemail] = React.useState('')
    const [password, setpassword] = React.useState('')
    
    const handleClose = () => setOpen(false); 

    const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
       signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
        console.log(userCredentials);
      }).then(()=> navigate('/gallery')).catch(e=> (
        console.log(e),
        navigate('/signup')
      ))
      
      // console.log(user);
      // if (user) {
      //   navigate('/gallery')
      // } else {
      //   alert('there was an error')
      // }
    } catch (error) {
      console.log(error)
    }
    

  };
  const defaultTheme = createTheme();

  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={style}>
            
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e)=>{
                        e.preventDefault()
                        setemail(e.currentTarget.value)
                    }}
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e)=>{
                        e.preventDefault()
                        setpassword(e.currentTarget.value)
                    }}
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2,backgroundColor:'darkblue',color:'#fff'  }}
                    >
                    Login
                    </Button>
                
                </Box>
            </Box>
            
          </Container>
        </ThemeProvider>

      </Modal>
    </div>
  );
}