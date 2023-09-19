import React from 'react'
import { Button } from '@mui/material'
import { TbPhotoFilled} from 'react-icons/tb'
import './navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className=' nav-container'>
        <div className=' inner-nav-con1'>
            <TbPhotoFilled/>
            <h2>Photo gallery</h2>
        </div>
        <div className=' inner-nav-con2'>
            <Link to={'/login'}>
                <Button variant='contained'
                sx={{
                  backgroundColor:'#fff',
                  color: 'darkblue',
                  fontWeight: 'bold',
                  marginX: '15px'
                }}>Login</Button>
            </Link>
            <Link to={'/signup'}>
                <Button variant='outlined'
                sx={{
                  border: '2px solid white',
                  color: 'white',
                  fontWeight: 'bold'
                }}>Sign up</Button>
            </Link>
        </div>
    </div>
  )
}
