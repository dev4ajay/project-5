import React from 'react'

function About() {
  return (
    <div className='about'>
        <div className='container'>
         <div className='row'>
            <div className='col-6 p-25'>
            <h3>About Us</h3>
<h1>WELCOME TO<br/> MAESTRO PIZZINI</h1>
<p>it is a long established   of using Lorem Ipsum is that it has a more-or-less normal distributo established   of using Lorem Ipsum is that it has a more-or-less normal distributo  
            </p>
            <div className='banner_btn'>
              <a href=''className='btn btn-smart'>READ MORE</a>
            </div>

            </div>
            <div className='col-6'>
                <div className='about_img'>
<img src={require("../image/image1.jpg")}></img>
</div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default About