import { Navbar } from "./navbar/navbar";
import { Main } from "./main/main";
import { Footer } from "./footer/footer";
import React from 'react'

const Homepage = () => {
  return (
    <div style={{
      height:'100vh',
      width: '100%'
    }}>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Homepage
