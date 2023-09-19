import React from 'react'
import { Button, Typography } from '@mui/material'
import { AiFillDropboxCircle, AiFillSecurityScan} from 'react-icons/ai'
import { CgReorder} from 'react-icons/cg'

import beachimg from '../../assests/beachimg.jpg'
import './main.css'

export const Main = () => {
  return (
    <main className=''>
        <div className='main1'>
            <div className='container-1'>
                <h1>An online photo gallery</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempora, placeat dolor provident voluptatem atque repudiandae, 
                    nemo exercitationem itaque facere obcaecati quasi architecto 
                    asperiores incidunt saepe?
                </p>
                <Button variant='contained'
                sx={{
                    backgroundColor:'darkblue',
                    color: '#fff',
                    fontWeight:'bold',
                    padding:'7px 25px'
                }}> Get started !</Button>
            </div>
            <div className='container-2'>
                <img src={beachimg} alt="" srcset="" />
            </div>
        </div>

        <div className='main2'>
            <Typography variant='h2' sx={{textAlign:'center',paddingY:'80px'}}>Some features</Typography>
            <div className='card-container'>
                <div>
                    <AiFillDropboxCircle style={{fontSize:'45px'}}/>
                    <h2>Drag and drop</h2>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Ratione, blanditiis! Et, qui.
                    </Typography>
                    <Button variant='contained'>Try now</Button>
                </div>
                <div>
                    <CgReorder style={{fontSize:'45px'}}/>
                    <h2>Image reordering</h2>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Ratione, blanditiis! Et, qui.
                    </Typography>
                    <Button variant='contained'>Try now</Button>
                </div>
                <div>
                    <AiFillSecurityScan style={{fontSize:'45px'}}/>
                    <h2>Authentication</h2>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Ratione, blanditiis! Et, qui.
                    </Typography>
                    <Button variant='contained'>Try now</Button>
                </div>
            </div>
        </div>

    </main>
  )
}
