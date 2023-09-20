import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore'


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

export const Signup=()=> {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const usersCollectionRef = collection(db,'users')

  const navigate = useNavigate()
  
  
  
  // modal open and close state
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const defaultTheme = createTheme();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const RegisterUser = await createUserWithEmailAndPassword(auth,email,password)
      // console.log(user)
      //  const user = await addDoc(usersCollectionRef,{
      //   firstname:firstName,
      //   lastname:lastName,
      //   email: email,
      //   password: password
      // })
      if (RegisterUser) {
        navigate('/gallery')
      } else{
        alert('invalid input')
      }
      
    } catch (error) {
      console.log(error);
    }

  
  };

  return (
    <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={style}
              >
              
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name" name="firstName"
                        required fullWidth
                        id="firstName" label="First Name"
                        autoFocus value={firstName}
                        onChange={(e)=>{
                           e.preventDefault()
                           setfirstName(e.target.value)
                        }}  
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required fullWidth
                        id="lastName" label="Last Name"
                        name="lastName" autoComplete="family-name"
                        value={lastName} onChange={(e)=>{
                          e.preventDefault()
                          setlastName(e.target.value)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required fullWidth
                        id="email" label="Email Address"
                        name="email" autoComplete="email"
                        value={email} onChange={(e)=>{
                          e.preventDefault()
                          setEmail(e.target.value)
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required fullWidth
                        name="password" label="Password"
                        type="password" id="password"
                        autoComplete="new-password" onChange={(e)=>{
                            e.preventDefault()
                            setPassword(e.target.value)
                        }}
                        value={password}
                      />
                    </Grid>
                    
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2,backgroundColor:'darkblue',color:'#fff' }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to={'/login'}>
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>

      </Modal>
    </div>
  );
}
