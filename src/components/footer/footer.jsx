import React from 'react'
import { TbPhotoFilled} from 'react-icons/tb'
import { AiFillInstagram, AiFillTwitterCircle ,AiFillFacebook } from 'react-icons/ai'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
        <div className='footer-con1'>
            <TbPhotoFilled/>
            <h2>Photo gallery</h2>
        </div>
        <div className='footer-con2'>
            <div>
                <AiFillInstagram style={{fontSize:'35px'}}/>
                <AiFillTwitterCircle style={{fontSize:'35px', margin:'0px,7px'}}/>
                <AiFillFacebook style={{fontSize:'35px'}}/>
            </div>
            <h4> &copy; WilsonTomsin 2023</h4>
        </div>
      
    </footer>
  )
}


