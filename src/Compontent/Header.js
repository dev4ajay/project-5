import React from 'react'
import Navbar from '../Compontent/Navbar'
function Header() {
  return (

<div className='banner'>
  <Navbar/>
        <div className='banner_content'> 
        <div className='container' >
          <div  className='banner_text'>
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>it is a long established   of using Lorem Ipsum is that it has a more-or-less normal distributo  
            </p>
            <div className='banner_btn'>
              <a href=''className='btn btn-smart'>DEVLERY NOW</a>
            </div>
            </div> 

        </div>
        </div>

    </div>
  )
}

export default Header